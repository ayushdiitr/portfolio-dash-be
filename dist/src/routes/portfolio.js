import { Router } from 'express';
import { prisma } from '../db/prisma.js';
import { logger } from '../utils/logger.js';
import { get, set } from '../services/cache.js';
const router = Router();
const PORTFOLIO_CACHE_KEY = 'portfolio:full';
const PORTFOLIO_CACHE_TTL = 10;
const calculatePortfolio = async () => {
    const holdings = await prisma.holding.findMany({
        orderBy: {
            symbol: 'asc',
        },
    });
    const symbols = holdings.map((h) => h.symbol);
    const marketDataMap = new Map((await prisma.marketData.findMany({
        where: {
            symbol: {
                in: symbols,
            },
        },
    })).map((md) => [md.symbol, md]));
    const holdingsWithMarketData = holdings.map((holding) => {
        const marketData = marketDataMap.get(holding.symbol);
        // @ts-ignore
        const cmp = marketData?.cmp ? Number(marketData.cmp) : null;
        const investment = Number(holding.purchasePrice) * holding.quantity;
        const presentValue = cmp ? cmp * holding.quantity : 0;
        const gainLoss = presentValue - investment;
        const gainLossPercent = investment > 0 ? (gainLoss / investment) * 100 : 0;
        return {
            id: holding.id,
            symbol: holding.symbol,
            name: holding.name,
            sector: holding.sector,
            exchange: holding.exchange,
            purchasePrice: Number(holding.purchasePrice),
            qty: holding.quantity,
            cmp,
            // @ts-ignore
            peRatio: marketData?.peRatio ? Number(marketData.peRatio) : null,
            // @ts-ignore
            latestEarnings: marketData?.latestEarnings || null,
            investment,
            presentValue,
            gainLoss,
            gainLossPercent,
            portfolioPercent: 0,
        };
    });
    const totalInvestment = holdingsWithMarketData.reduce((sum, h) => sum + h.investment, 0);
    const totalPresentValue = holdingsWithMarketData.reduce((sum, h) => sum + h.presentValue, 0);
    const totalGainLoss = totalPresentValue - totalInvestment;
    const totalGainLossPercent = totalInvestment > 0
        ? (totalGainLoss / totalInvestment) * 100
        : 0;
    holdingsWithMarketData.forEach((holding) => {
        holding.portfolioPercent =
            totalPresentValue > 0
                ? (holding.presentValue / totalPresentValue) * 100
                : 0;
    });
    const bySector = {};
    holdingsWithMarketData.forEach((holding) => {
        const sectorKey = holding.sector || 'Unknown';
        if (!bySector[sectorKey]) {
            bySector[sectorKey] = {
                investment: 0,
                presentValue: 0,
                gainLoss: 0,
                gainLossPercent: 0,
                holdings: [],
            };
        }
        const sector = bySector[sectorKey];
        sector.investment += holding.investment;
        sector.presentValue += holding.presentValue;
        sector.gainLoss += holding.gainLoss;
        sector.holdings.push(holding);
    });
    Object.values(bySector).forEach((sector) => {
        sector.gainLossPercent =
            sector.investment > 0
                ? (sector.gainLoss / sector.investment) * 100
                : 0;
    });
    return {
        totalInvestment,
        totalPresentValue,
        totalGainLoss,
        totalGainLossPercent,
        holdings: holdingsWithMarketData,
        bySector,
    };
};
router.get('/', async (req, res) => {
    try {
        const startTime = Date.now();
        const cached = await get(PORTFOLIO_CACHE_KEY);
        if (cached) {
            return res.json(cached);
        }
        const portfolio = await calculatePortfolio();
        await set(PORTFOLIO_CACHE_KEY, portfolio, PORTFOLIO_CACHE_TTL);
        res.json(portfolio);
    }
    catch (error) {
        logger.error({
            error: error instanceof Error ? error.message : String(error),
        }, 'Error fetching portfolio');
        throw error;
    }
});
export default router;
//# sourceMappingURL=portfolio.js.map