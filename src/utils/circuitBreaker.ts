import CircuitBreaker from 'opossum';
import { logger } from './logger.js';

export interface CircuitBreakerType {
  timeout?: number;
  errorThresholdPercentage?: number;
  resetTimeout?: number;
  name?: string;
}

const defaultOptions: Required<Omit<CircuitBreakerType, 'name'>> & { name?: string } = {
  timeout: 5000,
  errorThresholdPercentage: 50,
  resetTimeout: 30000,
};

export const createCircuitBreaker = <T extends any[], R>(
  fn: (...args: T) => Promise<R>,
  options: CircuitBreakerType = {}
): CircuitBreaker<T, R> => {
  const opts = { ...defaultOptions, ...options };
  const breakerName = options.name || 'CircuitBreaker';

  const breaker: CircuitBreaker<T, R> = new CircuitBreaker(fn, {
    timeout: opts.timeout,
    errorThresholdPercentage: opts.errorThresholdPercentage,
    resetTimeout: opts.resetTimeout,
    name: breakerName,
  });

  breaker.on('open', () => {
    logger.warn({ breaker: breakerName }, 'Circuit breaker opened');
  });

  breaker.on('halfOpen', () => {
    logger.info({ breaker: breakerName }, 'Circuit breaker half-open');
  });

  breaker.on('close', () => {
    logger.info({ breaker: breakerName }, 'Circuit breaker closed');
  });

  breaker.on('failure', (error: Error) => {
    logger.debug(
      {
        breaker: breakerName,
        error: error.message,
      },
      'Circuit breaker recorded failure'
    );
  });

  return breaker;
};
