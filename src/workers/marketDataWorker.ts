import { prisma } from '../db/prisma.js';
import { fetchMarketData } from '../services/marketData.js';
import { broadcastPortfolioUpdate } from '../websocket/socket.js';
import { logger } from '../utils/logger.js';
import { delPattern } from '../services/cache.js';

const WORKER_INTERVAL_MS = 15000;
const ENABLE_PRICE_HISTORY = true;

let workerInterval: NodeJS.Timeout | null = null;
let isRunning = false;

const updateMarketData = async (): Promise<void> => {
  if (isRunning) {
    logger.warn('Market data worker already running, skipping');
    return;
  }

  isRunning = true;

  try {

    const holdings = await prisma.holding.findMany({
      select: {
        symbol: true,
        exchange: true,
      },
      distinct: ['symbol'],
    });

    const symbols = holdings.map((h) => ({symbol:h.symbol, exch: h.exchange || 'NASDAQ'}));

    if (symbols.length === 0) {
      logger.info('No symbols to update');
      isRunning = false;
      return;
    }

    const results = await Promise.allSettled(
      symbols.map(async ({symbol, exch}) => {
        try {
          const marketData = await fetchMarketData(symbol, exch, false); 

          await prisma.marketData.upsert({
            where: { symbol },
            update: {
              cmp: marketData.cmp ? marketData.cmp : 0,
              peRatio: marketData.peRatio ? marketData.peRatio : 0,
              latestEarnings: marketData.latestEarnings,
              priceSource: marketData.priceSource ,
              fundamentalSource: marketData.fundamentalSource,
              lastUpdated: new Date(),
            },
            create: {
              symbol,
              cmp: marketData.cmp ? marketData.cmp : null,
              peRatio: marketData.peRatio ? marketData.peRatio : null,
              latestEarnings: marketData.latestEarnings || null,
              priceSource: marketData.priceSource || null,
              fundamentalSource: marketData.fundamentalSource || null,
            },
          });

          // Optional: write to PriceHistory
          if (ENABLE_PRICE_HISTORY && marketData.cmp) {
            await prisma.priceHistory.create({
              data: {
                symbol,
                cmp: marketData.cmp,
                recordedAt: new Date(),
              },
            });
          }

          return { symbol, success: true };
        } catch (error) {
          logger.error(
            {
              symbol,
              error: error instanceof Error ? error.message : String(error),
            },
            'Failed to update market data for symbol'
          );
          return { symbol, success: false };
        }
      })
    );

    const successful = results.filter(
      (r) => r.status === 'fulfilled' && r.value.success
    ).length;
    const failed = results.length - successful;

    logger.info(
      {
        total: symbols.length,
        successful,
        failed,
      },
      'Market data update cycle completed'
    );

    await delPattern('portfolio:*');

    // Broadcast WebSocket update
    try {
      const portfolio = await prisma.holding.findMany({
        // include: {
        //   // We'll calculate summary stats
        // },
      });

      const marketDataMap = new Map(
        (
          await prisma.marketData.findMany({
            where: {
              symbol: {
                in: portfolio.map((h) => h.symbol),
              },
            },
          })
        ).map((md) => [md.symbol, md])
      );

      let totalInvestment = 0;
      let totalPresentValue = 0;

      portfolio.forEach((holding) => {
        const investment =
          Number(holding.purchasePrice) * holding.quantity;
        totalInvestment += investment;

        const marketData = marketDataMap.get(holding.symbol);
        const cmp = marketData?.cmp ? Number(marketData.cmp) : null;
        if (cmp) {
          totalPresentValue += cmp * holding.quantity;
        }
      });

      const totalGainLoss = totalPresentValue - totalInvestment;
      const totalGainLossPercent =
        totalInvestment > 0
          ? (totalGainLoss / totalInvestment) * 100
          : 0;

      broadcastPortfolioUpdate({
        totalInvestment,
        totalPresentValue,
        totalGainLoss,
        totalGainLossPercent,
      });
    } catch (error) {
      logger.error(
        {
          error: error instanceof Error ? error.message : String(error),
        },
        'Failed to broadcast portfolio update'
      );
    }
  } catch (error) {
    logger.error(
      {
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
      },
      'Market data worker error'
    );
  } finally {
    isRunning = false;
  }
};

export const startMarketDataWorker = (): void => {
  if (workerInterval) {
    return;
  }

  logger.info(
    { intervalMs: WORKER_INTERVAL_MS },
    'Starting market data worker'
  );

  updateMarketData().catch((error) => {
    logger.error({ error }, 'Initial market data update failed');
  });

  workerInterval = setInterval(() => {
    updateMarketData().catch((error) => {
      logger.error({ error }, 'Scheduled market data update failed');
    });
  }, WORKER_INTERVAL_MS);
};

export const stopMarketDataWorker = (): void => {
  if (workerInterval) {
    clearInterval(workerInterval);
    workerInterval = null;
    logger.info('Market data worker stopped');
  }
};
