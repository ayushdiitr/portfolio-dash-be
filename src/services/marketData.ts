import { logger } from '../utils/logger.js';
import { fetchCMP } from './yahoo.js';
import { fetchFundamentals } from './google.js';
import { get, set } from './cache.js';
import type { MarketDataResponse } from '../types/marketData.js';

const CACHE_TTL_SECONDS = 30;
const CACHE_KEY_PREFIX = 'market_data:';

const getCacheKey = (symbol: string): string => {
  return `${CACHE_KEY_PREFIX}${symbol}`;
};

export const fetchMarketData = async (
  symbol: string,
  exch: string,
  useCache: boolean = true
): Promise<MarketDataResponse> => {
  const cacheKey = getCacheKey(symbol);

  if (useCache) {
    const cached = await get<MarketDataResponse>(cacheKey);
    if (cached) {
      logger.debug({ symbol }, 'Market data cache hit');
      return cached;
    }
  }

  logger.debug({ symbol }, 'Fetching fresh market data');

  const [yahooResult, googleResult] = await Promise.allSettled([
    fetchCMP(symbol, exch),
    fetchFundamentals(symbol),
  ]);

  let cmp: number | null = null;
  let priceSource: 'yahoo' | 'google' | null = null;

  if (yahooResult.status === 'fulfilled') {
    cmp = yahooResult.value.cmp;
    priceSource = 'yahoo';
  } else {
    logger.warn(
      {
        symbol,
        error: yahooResult.reason?.message || 'Yahoo fetch failed',
      },
      'Yahoo Finance fetch failed'
    );
  }

  let peRatio: number | null = null;
  let latestEarnings: string | null = null;
  let fundamentalSource: 'google' | null = null;

  if (googleResult.status === 'fulfilled') {
    peRatio = googleResult.value.peRatio;
    latestEarnings = googleResult.value.latestEarnings;
    fundamentalSource = 'google';
  } else {
    logger.warn(
      {
        symbol,
        error: googleResult.reason?.message || 'Google fetch failed',
      },
      'Google Finance fetch failed'
    );
  }

  const marketData: MarketDataResponse = {
    cmp,
    peRatio,
    latestEarnings,
    priceSource,
    fundamentalSource,
    timestamp: new Date(),
  };

  if (useCache) {
    await set(cacheKey, marketData, CACHE_TTL_SECONDS);
  }

  return marketData;
};
