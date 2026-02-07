import axios from 'axios';
import * as cheerio from 'cheerio';
import { logger } from '../utils/logger.js';
import { withRetry } from '../utils/retry.js';
import { withTimeout } from '../utils/timeout.js';
import { createCircuitBreaker } from '../utils/circuitBreaker.js';
import type { GoogleAPIResponse } from '../types/marketData.js';

const getGoogleFinRes = async (
  symbol: string
): Promise<GoogleAPIResponse> => {
  const startTime = Date.now();
  logger.debug({ symbol }, 'Fetching fundamentals from Google Finance');

  try {
    const url = `https://www.google.com/finance/quote/${symbol}:NASDAQ`;
    const response = await axios.get(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });
    logger.info({symbol}, 'res status')
    if (response.status !== 200) {
      throw new Error(`Google Finance error: ${response.status}`);
    }

    const html = response.data;
    const $ = cheerio.load(html);
    const metrics: Record<string, string> = {};
    const stockPriceContainer = $('.YMlKec.fxKbKc').first().text();


$('.gyFHrc').each((_, el) => {
  const label = $(el).find('.mfs7Fc').text().trim();
  const value = $(el).find('.P6K39c').text().trim();

  if (label && value) metrics[label] = value;
});


logger.info({
  metrics,
  peRatio: metrics['P/E ratio'] ?? null,
  marketCap: metrics['Market cap'] ?? null,
  avgVolume: metrics['Avg Volume'] ?? null,
  dividendYield: metrics['Dividend yield'] ?? null
});

    
    
    let peRatio: number | null = null;
    const peRatioStr = metrics['P/E ratio'];
    if (peRatioStr) {
      const parsed = Number(peRatioStr);
      if (!isNaN(parsed)) {
        peRatio = parsed;
      }
    }
    


    let latestEarnings: string | null = null;
    
    $('div').each((_, elem) => {
      const text = $(elem).text();
      if (
        text.includes('Earnings') &&
        (text.includes('per share') || text.match(/\$\d+\.\d+/))
      ) {
        const earningsMatch = text.match(/\$?([\d.]+)\s*(?:per share|EPS)?/i);
        if (earningsMatch) {
          latestEarnings = `$${earningsMatch[1]}`;
          return false; // break
        }
      }
    });

    if (!latestEarnings) {
      $('div').each((_, elem) => {
        const text = $(elem).text();
        if (text.includes('Earnings') && text.match(/\d{4}/)) {
          latestEarnings = text.trim();
          return false; 
        }
      });
    }


    logger.info(
      {
        symbol,
        peRatio,
        latestEarnings,
      },
      'Successfully fetched data from G Finance'
    );

    return {
      peRatio,
      latestEarnings,
      source: 'google',
      timestamp: new Date(),
    };
  } catch (error) {
    logger.error(
      {
        symbol,
        error: error instanceof Error ? error.message : String(error),
      },
      'Failed to fetch data'
    );
    throw error;
  }
};

const googleCircuitBreaker = createCircuitBreaker(
  (symbol: string) =>
    withTimeout(
      withRetry(() => getGoogleFinRes(symbol), {
        maxRetries: 3,
        baseDelayMs: 1000,
        maxDelayMs: 10000,
      }),
      5000,
      `Google Fin API  timeout for ${symbol}`
    ),
  {
    name: 'GoogleFinance',
    timeout: 5000,
    errorThresholdPercentage: 50,
    resetTimeout: 30000,
  }
);

export const fetchFundamentals = async (
  symbol: string
): Promise<GoogleAPIResponse> => {
  try {
    return await googleCircuitBreaker.fire(symbol);
  } catch (error) {
    logger.error(
      {
        symbol,
        error: error instanceof Error ? error.message : String(error),
      },
      'Google API circuit failed'
    );
    throw new Error(
      `Failed to fetch fundamentals for ${symbol}: ${error instanceof Error ? error.message : String(error)}`
    );
  }
};
