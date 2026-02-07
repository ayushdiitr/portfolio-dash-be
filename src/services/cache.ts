import { logger } from "../utils/logger.js";
import redisClient from "./redis.js";



export const get = async <T>(key: string): Promise<T | null> => {
  try {
    const value = await redisClient.get(key);
    if (value) {
      return JSON.parse(value) as T;
    }
    return null;
  } catch (error) {
    logger.error({ error, key }, 'Cache get error');
    return null;
  }
};


export const set = async (
    key: string,
    value: unknown,
    ttl: number = 30
  ): Promise<void> => {
    try {
        await redisClient.setEx(key, ttl, JSON.stringify(value))
    } catch (error) {
      logger.error({ error, key }, 'Cache set error');
    }
  };
  
export const delPattern = async (pattern: string): Promise<void> => {
  try {
    const keys = await redisClient.keys(pattern);
    if (keys.length > 0) {
      await redisClient.del(keys);
    }
  } catch (error) {
    logger.error({ error, pattern }, 'Cache delete error');
  }
};