import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Holding: "Holding";
    readonly MarketData: "MarketData";
    readonly PriceHistory: "PriceHistory";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const HoldingScalarFieldEnum: {
    readonly id: "id";
    readonly symbol: "symbol";
    readonly name: "name";
    readonly sector: "sector";
    readonly exchange: "exchange";
    readonly purchasePrice: "purchasePrice";
    readonly quantity: "quantity";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type HoldingScalarFieldEnum = (typeof HoldingScalarFieldEnum)[keyof typeof HoldingScalarFieldEnum];
export declare const MarketDataScalarFieldEnum: {
    readonly symbol: "symbol";
    readonly cmp: "cmp";
    readonly peRatio: "peRatio";
    readonly latestEarnings: "latestEarnings";
    readonly priceSource: "priceSource";
    readonly fundamentalSource: "fundamentalSource";
    readonly lastUpdated: "lastUpdated";
};
export type MarketDataScalarFieldEnum = (typeof MarketDataScalarFieldEnum)[keyof typeof MarketDataScalarFieldEnum];
export declare const PriceHistoryScalarFieldEnum: {
    readonly id: "id";
    readonly symbol: "symbol";
    readonly cmp: "cmp";
    readonly recordedAt: "recordedAt";
};
export type PriceHistoryScalarFieldEnum = (typeof PriceHistoryScalarFieldEnum)[keyof typeof PriceHistoryScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map