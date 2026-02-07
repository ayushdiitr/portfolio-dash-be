import { Router, type Request, type Response } from 'express';
import { prisma } from '../db/prisma.js';
import { logger } from '../utils/logger.js';
import { delPattern } from '../services/cache.js';
import { searchStocks } from '../services/yahoo.js';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const query = (req.query.q as string | undefined)?.trim();

  if (!query) {
    return res.status(400).json({ error: 'Query is required' });
  }

  try {
    const results = await searchStocks(query);
    res.json(results);
  } catch (error) {
    logger.error(
      {
        query,
        error: error instanceof Error ? error.message : String(error),
      },
      'Error searching stocks'
    );
    res.status(500).json({ error: 'Failed to search stocks' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  const {
    symbol,
    name,
    sector,
    exchange,
    purchasePrice,
    qty,
  }: {
    symbol: string;
    name: string;
    sector: string;
    exchange: string;
    purchasePrice: number;
    qty: number;
  } = req.body;

  if (
    !symbol ||
    !name ||
    !sector ||
    !exchange ||
    typeof purchasePrice !== 'number' ||
    typeof qty !== 'number'
  ) {
    return res.status(400).json({ error: 'Invalid or missing fields' });
  }

  try {
    const holding = await prisma.holding.create({
      data: {
        symbol,
        name,
        sector,
        exchange,
        purchasePrice,
        quantity: qty,
      },
    });

    await delPattern('portfolio:*');

    res.status(201).json(holding);
  } catch (error) {
    logger.error(
      {
        symbol,
        error: error instanceof Error ? error.message : String(error),
      },
      'Error adding holding'
    );
    res.status(500).json({ error: 'Failed to add holding' });
  }
});

router.delete('/', async (req: Request, res: Response) => {
  const { ids }: { ids: string[] } = req.body;

  if (!ids || ids.length === 0) {
    return res.status(400).json({ error: 'ID is required' });
  }

  try {
    const holdings = await prisma.holding.findMany({
      where: {
        id: {
          in: ids,
        },
      },
      select: {
        symbol: true,
      },
    });

    const symbols = holdings.map((h) => h.symbol);

    if (symbols.length === 0) {
      return res.status(404).json({ error: 'No holdings found' });
    }

    await prisma.$transaction(async (tx) => {
      await tx.priceHistory.deleteMany({
        where: {
          symbol: {
            in: symbols,
          },
        },
      });

      await tx.marketData.deleteMany({
        where: {
          symbol: {
            in: symbols,
          },
        },
      });

      await tx.holding.deleteMany({
        where: {
          id: {
            in: ids,
          },
        },
      });
    });

    await delPattern('portfolio:*');

    res.json({
      message: 'Holdings deleted successfully',
      count: ids.length,
      symbols: symbols,
    });
  } catch (error) {
    logger.error(
      {
        ids,
        error: error instanceof Error ? error.message : String(error),
      },
      'Error deleting holdings'
    );
    res.status(500).json({ error: 'Failed to delete holdings' });
  }
});

router.get('/:id/history', async (req: Request, res: Response) => {
  const id = req.params.id as string;

  if (!id) {
    return res.status(400).json({ error: 'Holding ID is required' });
  }

  try {
    const holding = await prisma.holding.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        symbol: true,
        name: true,
      },
    });

    if (!holding) {
      return res.status(404).json({ error: 'Holding not found' });
    }

    const priceHistory = await prisma.priceHistory.findMany({
      where: {
        symbol: holding.symbol,
      },
      orderBy: {
        recordedAt: 'desc',
      },
      select: {
        id: true,
        cmp: true,
        recordedAt: true,
      },
    });

    res.json({
      holding: {
        id: holding.id,
        symbol: holding.symbol,
        name: holding.name,
      },
      history: priceHistory.map((entry) => ({
        id: entry.id.toString(),
        price: Number(entry.cmp),
        recordedAt: entry.recordedAt,
      })),
    });
  } catch (error) {
    logger.error(
      {
        holdingId: id,
        error: error instanceof Error ? error.message : String(error),
      },
      'Error fetching holding history'
    );
    res.status(500).json({ error: 'Failed to fetch holding history' });
  }
});

export default router;

