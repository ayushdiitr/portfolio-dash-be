import { Router } from 'express';
import { prisma } from '../db/prisma.js';
import portfolioRouter from './portfolio.js';
import stocksRouter from './stocks.js';
import redisClient from '../services/redis.js';
import { logger } from '../utils/logger.js';
const router = Router();
router.get('/health', async (req, res) => {
    try {
        await prisma.$queryRaw `SELECT 1`;
        const redis = await redisClient.ping();
        logger.debug(redis);
        res.json({
            status: 'OK',
            database: 'connected',
            redis: redis === 'PONG' ? 'connected' : 'disconnected',
            timestamp: new Date().toISOString(),
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'ERROR',
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
});
router.use('/portfolio', portfolioRouter);
router.use('/stocks', stocksRouter);
export default router;
//# sourceMappingURL=index.js.map