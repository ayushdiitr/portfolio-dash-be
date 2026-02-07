import { logger } from '../utils/logger.js';
import {createClient} from 'redis';

const redisClient = createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
})

redisClient.on('error', (err) => {
    logger.error('Redis error: ', err)
})

redisClient.on('connect' , () => {
    logger.info('Redis connected!')
})

export const connectRedis = async() => {
    if(!redisClient.isOpen) {
        await redisClient.connect();
    }
}

export const disconnectRedis = async () => {
    if (redisClient.isOpen) {
      await redisClient.disconnect();
    }
  };
  
  export default redisClient;

// let redisClient: typeof Redis | null = null;

// type redisType = typeof Redis 

// export const getRedisClient = (): redisType => {
//   if (!redisClient) {
//     const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';
//     redisClient = new Redis(redisUrl, {
//       retryStrategy: (times) => {
//         const delay = Math.min(times * 50, 2000);
//         logger.warn({ times, delay }, 'Redis retry');
//         return delay;
//       },
//       maxRetriesPerRequest: 3,
//     });

//     redisClient.on('connect', () => {
//       logger.info('Redis connected');
//     });

//     redisClient.on('error', (err) => {
//       logger.error({ err }, 'Redis error');
//     });

//     redisClient.on('close', () => {
//       logger.warn('Redis connection closed');
//     });
//   }
//   return redisClient;
// };

// export const cacheGet = async <T>(key: string): Promise<T | null> => {
//   try {
//     const client = getRedisClient();
//     const value = await client.get(key);
//     if (value) {
//       return JSON.parse(value) as T;
//     }
//     return null;
//   } catch (error) {
//     logger.error({ error, key }, 'Cache get error');
//     return null;
//   }
// };

// export const cacheSet = async (
//   key: string,
//   value: unknown,
//   ttlSeconds: number = 30
// ): Promise<void> => {
//   try {
//     const client = getRedisClient();
//     await client.setex(key, ttlSeconds, JSON.stringify(value));
//   } catch (error) {
//     logger.error({ error, key }, 'Cache set error');
//   }
// };

// export const cacheDel = async (key: string): Promise<void> => {
//   try {
//     const client = getRedisClient();
//     await client.del(key);
//   } catch (error) {
//     logger.error({ error, key }, 'Cache delete error');
//   }
// };

// export const cacheDelPattern = async (pattern: string): Promise<void> => {
//   try {
//     const client = getRedisClient();
//     const keys = await client.keys(pattern);
//     if (keys.length > 0) {
//       await client.del(...keys);
//     }
//   } catch (error) {
//     logger.error({ error, pattern }, 'Cache delete pattern error');
//   }
// };

// export const closeRedis = async (): Promise<void> => {
//   if (redisClient) {
//     await redisClient.quit();
//     redisClient = null;
//     logger.info('Redis connection closed');
//   }
// };
