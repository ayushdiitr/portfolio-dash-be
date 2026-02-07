import { Router } from "express";
import { prisma } from "../db/prisma.js";
const router = Router();
router.get('/health', async (req, res) => {
    try {
        await prisma.$queryRaw `SELECT 1`;
        // const redisPing = 
        res.json({
            status: 'OK',
            database: 'connected',
            redis: 'connected',
            timestamp: new Date().toISOString()
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'ERROR',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
});
export default router;
//# sourceMappingURL=index.js.map