-- CreateTable
CREATE TABLE "Holding" (
    "id" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "exchange" TEXT NOT NULL,
    "purchasePrice" DECIMAL(12,2) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Holding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarketData" (
    "symbol" VARCHAR(20) NOT NULL,
    "cmp" DECIMAL(12,2),
    "peRatio" DECIMAL(8,2),
    "latestEarnings" TEXT,
    "priceSource" TEXT,
    "fundamentalSource" TEXT,
    "lastUpdated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MarketData_pkey" PRIMARY KEY ("symbol")
);

-- CreateTable
CREATE TABLE "PriceHistory" (
    "id" BIGSERIAL NOT NULL,
    "symbol" VARCHAR(20) NOT NULL,
    "cmp" DECIMAL(12,2) NOT NULL,
    "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PriceHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Holding_symbol_key" ON "Holding"("symbol");

-- CreateIndex
CREATE INDEX "Holding_symbol_idx" ON "Holding"("symbol");

-- CreateIndex
CREATE INDEX "Holding_sector_idx" ON "Holding"("sector");

-- CreateIndex
CREATE INDEX "PriceHistory_symbol_idx" ON "PriceHistory"("symbol");

-- AddForeignKey
ALTER TABLE "PriceHistory" ADD CONSTRAINT "PriceHistory_symbol_fkey" FOREIGN KEY ("symbol") REFERENCES "MarketData"("symbol") ON DELETE RESTRICT ON UPDATE CASCADE;
