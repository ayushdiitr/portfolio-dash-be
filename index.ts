import express, { type Request, type Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './src/routes/index.js';
import { errorHandler, notFoundHandler } from './src/middleware/errorHandler.js';
import { requestLogger } from './src/middleware/requestLogger.js';
import { startMarketDataWorker, stopMarketDataWorker } from './src/workers/marketDataWorker.js';
import { logger } from './src/utils/logger.js';
import { prisma } from './src/db/prisma.js';
import { connectRedis, disconnectRedis } from './src/services/redis.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(requestLogger);

app.get('/', (_: Request, res: Response) => {
  res.status(200).json({ message: 'Server is healthy!' });
});

app.use('/api/', router);

app.use(notFoundHandler);
app.use(errorHandler);

const server = app.listen(PORT, () => {
  logger.info({ port: PORT }, 'Server started');
  startMarketDataWorker();
  connectRedis();
});

const stopServer = async (signal: string) => {
  
  server.close(async () => {
    logger.info('HTTP server closed');
    
    stopMarketDataWorker();
    
    await disconnectRedis();
    
    await prisma.$disconnect();
    
    logger.info('shutdown completed');
    process.exit(0);
  });
  
  setTimeout(() => {
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', () => stopServer('SIGTERM'));
process.on('SIGINT', () => stopServer('SIGINT'));

process.on('unhandledRejection', (reason, promise) => {
  logger.error({ reason, promise }, 'Unhandled rejection');
});

process.on('uncaughtException', (error) => {
  logger.error({ error }, 'Uncaught exception');
  process.exit(1);
});
