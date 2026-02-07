export interface MarketDataResponse {
  cmp: number | null;
  peRatio: number | null;
  latestEarnings: string | null;
  priceSource: 'yahoo' | 'google' | null;
  fundamentalSource: 'google' | null;
  timestamp: Date;
}

export interface YahooAPIResponse {
  cmp: number;
  source: 'yahoo';
  timestamp: Date;
}

export interface GoogleAPIResponse {
  peRatio: number | null;
  latestEarnings: string | null;
  source: 'google';
  timestamp: Date;
}

export interface HoldingWithMarketData {
  id: string;
  symbol: string;
  name: string;
  sector: string;
  exchange: string;
  purchasePrice: number;
  qty: number;
  cmp: number | null;
  peRatio: number | null;
  latestEarnings: string | null;
  investment: number;
  presentValue: number;
  gainLoss: number;
  gainLossPercent: number;
  portfolioPercent: number;
}

export interface SectorGroup {
  investment: number;
  presentValue: number;
  gainLoss: number;
  gainLossPercent: number;
  holdings: HoldingWithMarketData[];
}

export interface PortfolioResponse {
  totalInvestment: number;
  totalPresentValue: number;
  totalGainLoss: number;
  totalGainLossPercent: number;
  holdings: HoldingWithMarketData[];
  bySector: Record<string, SectorGroup>;
}

export interface PortfolioUpdateEvent {
  type: 'portfolio_update';
  timestamp: Date;
  data: {
    totalInvestment: number;
    totalPresentValue: number;
    totalGainLoss: number;
    totalGainLossPercent: number;
  };
}
