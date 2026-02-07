import { logger } from './logger.js';
import { timeout } from './timeout.js';

export interface RetryOptions {
  maxRetries?: number;
  baseDelayMs?: number;
  maxDelayMs?: number;
  retryable?: (error: Error) => boolean;
}

const defaultOptions: Required<RetryOptions> = {
  maxRetries: 3,
  baseDelayMs: 1000,
  maxDelayMs: 10000,
  retryable: () => true,
};


const jitter = (delay: number): number => {
  return delay + Math.random() * delay * 0.1;
};

const calculateDelay = (att: number, baseDelay: number, maxDelay: number): number => {
  const exponentialDelay = baseDelay * Math.pow(2, att);
  const delay = Math.min(exponentialDelay, maxDelay);
  return jitter(delay);
};

export const withRetry = async <T>(
  fn: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> => {
  const opts = { ...defaultOptions, ...options };
  let err: Error | null = null;

  for (let attempt = 0; attempt <= opts.maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      err = error instanceof Error ? error : new Error(String(error));

      if (!opts.retryable(err)) {
        throw err;
      }

      if (attempt === opts.maxRetries) {
        logger.warn(
          {
            attempt: attempt + 1,
            maxRetries: opts.maxRetries,
            error: err.message,
          },
          'Max retries reached'
        );
        throw err;
      }

      const delay = calculateDelay(attempt, opts.baseDelayMs, opts.maxDelayMs);
      logger.debug(
        {
          attempt: attempt + 1,
          maxRetries: opts.maxRetries,
          delayMs: Math.round(delay),
          error: err.message,
        },
        'Retrying after delay'
      );

      await timeout(delay);
    }
  }

  throw err || new Error('Unknown error in retry logic');
};
