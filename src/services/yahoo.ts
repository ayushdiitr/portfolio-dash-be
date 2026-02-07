import YahooFinance from 'yahoo-finance2';
import { logger } from '../utils/logger.js';
import { withRetry } from '../utils/retry.js';
import { withTimeout } from '../utils/timeout.js';
import { createCircuitBreaker } from '../utils/circuitBreaker.js';
import type { YahooAPIResponse } from '../types/marketData.js';

const yahooFinance = new YahooFinance();

export interface StockSearchResult {
  symbol: string;
  name: string;
  exchange: string;
}

const fetchCMPInternal = async (
  symbol: string,
  exchange: string = 'NASDAQ'
): Promise<YahooAPIResponse> => {
  const startTime = Date.now();
  logger.debug({ symbol, exchange }, 'CMP...');
  let id = symbol;
  if (exchange === 'NASDAQ') {
    id = symbol;
  } else {
    id = `${symbol}.${exchange}`;
  }
  try {
    const quote = await yahooFinance.quote(id);

    if (!quote || !quote.regularMarketPrice) {
      throw new Error(`No price data available for ${symbol}`);
    }

    const cmp = quote.regularMarketPrice;
    const duration = Date.now() - startTime;

    logger.info(
      {
        symbol,
        cmp,
        duration,
      },
      'Successfully fetched CMP '
    );

    return {
      cmp,
      source: 'yahoo',
      timestamp: new Date(),
    };
  } catch (error) {
    const duration = Date.now() - startTime;
    logger.error(
      {
        symbol,
        error: error instanceof Error ? error.message : String(error),
        duration,
      },
      'Failed to fetch CMP from Yahoo Finance'
    );
    throw error;
  }
};

const yahooCircuitBreaker = createCircuitBreaker(
  (symbol: string, exchange?: string) =>
    withTimeout(
      withRetry(() => fetchCMPInternal(symbol, exchange), {
        maxRetries: 3,
        baseDelayMs: 1000,
        maxDelayMs: 10000,
      }),
      5000,
      `Yahoo Finance API timeout for ${symbol}`
    ),
  {
    name: 'YahooFinance',
    timeout: 5000,
    errorThresholdPercentage: 50,
    resetTimeout: 30000,
  }
);

export const fetchCMP = async (
  symbol: string,
  exch: string
): Promise<YahooAPIResponse> => {
  try {
    return await yahooCircuitBreaker.fire(symbol, exch);
  } catch (error) {
    logger.error(
      {
        symbol,
        error: error instanceof Error ? error.message : String(error),
      },
      'Yahoo API circuit breaker failed'
    );
    throw new Error(
      `Error fetching CMP: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
};

export const searchStocks = async (
  query: string
): Promise<StockSearchResult[]> => {

  try {
    const result = await yahooFinance.search(query, {
      quotesCount: 10,
    } as any);
    logger.info(result.quotes)
    const quotes = result?.quotes ?? [];

    const res: StockSearchResult[] = quotes
      .filter((q: any) => q.symbol)
      .map((q: any) => ({
        symbol: q.symbol as string,
        name: (q.shortname || q.longname || q.symbol) as string,
        exchange: (q.exchange || 'NASDAQ') as string,
        sector: q.sector
      }));


    return res;
  } catch (error) {
    logger.error(
      {
        query,
        error: error instanceof Error ? error.message : String(error),
      },
      'Failed to searchstocks'
    );
    throw error;
  }
};
