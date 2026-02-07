import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model MarketData
 *
 */
export type MarketDataModel = runtime.Types.Result.DefaultSelection<Prisma.$MarketDataPayload>;
export type AggregateMarketData = {
    _count: MarketDataCountAggregateOutputType | null;
    _avg: MarketDataAvgAggregateOutputType | null;
    _sum: MarketDataSumAggregateOutputType | null;
    _min: MarketDataMinAggregateOutputType | null;
    _max: MarketDataMaxAggregateOutputType | null;
};
export type MarketDataAvgAggregateOutputType = {
    cmp: runtime.Decimal | null;
    peRatio: runtime.Decimal | null;
};
export type MarketDataSumAggregateOutputType = {
    cmp: runtime.Decimal | null;
    peRatio: runtime.Decimal | null;
};
export type MarketDataMinAggregateOutputType = {
    symbol: string | null;
    cmp: runtime.Decimal | null;
    peRatio: runtime.Decimal | null;
    latestEarnings: string | null;
    priceSource: string | null;
    fundamentalSource: string | null;
    lastUpdated: Date | null;
};
export type MarketDataMaxAggregateOutputType = {
    symbol: string | null;
    cmp: runtime.Decimal | null;
    peRatio: runtime.Decimal | null;
    latestEarnings: string | null;
    priceSource: string | null;
    fundamentalSource: string | null;
    lastUpdated: Date | null;
};
export type MarketDataCountAggregateOutputType = {
    symbol: number;
    cmp: number;
    peRatio: number;
    latestEarnings: number;
    priceSource: number;
    fundamentalSource: number;
    lastUpdated: number;
    _all: number;
};
export type MarketDataAvgAggregateInputType = {
    cmp?: true;
    peRatio?: true;
};
export type MarketDataSumAggregateInputType = {
    cmp?: true;
    peRatio?: true;
};
export type MarketDataMinAggregateInputType = {
    symbol?: true;
    cmp?: true;
    peRatio?: true;
    latestEarnings?: true;
    priceSource?: true;
    fundamentalSource?: true;
    lastUpdated?: true;
};
export type MarketDataMaxAggregateInputType = {
    symbol?: true;
    cmp?: true;
    peRatio?: true;
    latestEarnings?: true;
    priceSource?: true;
    fundamentalSource?: true;
    lastUpdated?: true;
};
export type MarketDataCountAggregateInputType = {
    symbol?: true;
    cmp?: true;
    peRatio?: true;
    latestEarnings?: true;
    priceSource?: true;
    fundamentalSource?: true;
    lastUpdated?: true;
    _all?: true;
};
export type MarketDataAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MarketData to aggregate.
     */
    where?: Prisma.MarketDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MarketData to fetch.
     */
    orderBy?: Prisma.MarketDataOrderByWithRelationInput | Prisma.MarketDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MarketDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MarketData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MarketData.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MarketData
    **/
    _count?: true | MarketDataCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MarketDataAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MarketDataSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MarketDataMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MarketDataMaxAggregateInputType;
};
export type GetMarketDataAggregateType<T extends MarketDataAggregateArgs> = {
    [P in keyof T & keyof AggregateMarketData]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMarketData[P]> : Prisma.GetScalarType<T[P], AggregateMarketData[P]>;
};
export type MarketDataGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MarketDataWhereInput;
    orderBy?: Prisma.MarketDataOrderByWithAggregationInput | Prisma.MarketDataOrderByWithAggregationInput[];
    by: Prisma.MarketDataScalarFieldEnum[] | Prisma.MarketDataScalarFieldEnum;
    having?: Prisma.MarketDataScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MarketDataCountAggregateInputType | true;
    _avg?: MarketDataAvgAggregateInputType;
    _sum?: MarketDataSumAggregateInputType;
    _min?: MarketDataMinAggregateInputType;
    _max?: MarketDataMaxAggregateInputType;
};
export type MarketDataGroupByOutputType = {
    symbol: string;
    cmp: runtime.Decimal | null;
    peRatio: runtime.Decimal | null;
    latestEarnings: string | null;
    priceSource: string | null;
    fundamentalSource: string | null;
    lastUpdated: Date;
    _count: MarketDataCountAggregateOutputType | null;
    _avg: MarketDataAvgAggregateOutputType | null;
    _sum: MarketDataSumAggregateOutputType | null;
    _min: MarketDataMinAggregateOutputType | null;
    _max: MarketDataMaxAggregateOutputType | null;
};
type GetMarketDataGroupByPayload<T extends MarketDataGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MarketDataGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MarketDataGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MarketDataGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MarketDataGroupByOutputType[P]>;
}>>;
export type MarketDataWhereInput = {
    AND?: Prisma.MarketDataWhereInput | Prisma.MarketDataWhereInput[];
    OR?: Prisma.MarketDataWhereInput[];
    NOT?: Prisma.MarketDataWhereInput | Prisma.MarketDataWhereInput[];
    symbol?: Prisma.StringFilter<"MarketData"> | string;
    cmp?: Prisma.DecimalNullableFilter<"MarketData"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    peRatio?: Prisma.DecimalNullableFilter<"MarketData"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    latestEarnings?: Prisma.StringNullableFilter<"MarketData"> | string | null;
    priceSource?: Prisma.StringNullableFilter<"MarketData"> | string | null;
    fundamentalSource?: Prisma.StringNullableFilter<"MarketData"> | string | null;
    lastUpdated?: Prisma.DateTimeFilter<"MarketData"> | Date | string;
    priceHistory?: Prisma.PriceHistoryListRelationFilter;
};
export type MarketDataOrderByWithRelationInput = {
    symbol?: Prisma.SortOrder;
    cmp?: Prisma.SortOrderInput | Prisma.SortOrder;
    peRatio?: Prisma.SortOrderInput | Prisma.SortOrder;
    latestEarnings?: Prisma.SortOrderInput | Prisma.SortOrder;
    priceSource?: Prisma.SortOrderInput | Prisma.SortOrder;
    fundamentalSource?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastUpdated?: Prisma.SortOrder;
    priceHistory?: Prisma.PriceHistoryOrderByRelationAggregateInput;
};
export type MarketDataWhereUniqueInput = Prisma.AtLeast<{
    symbol?: string;
    AND?: Prisma.MarketDataWhereInput | Prisma.MarketDataWhereInput[];
    OR?: Prisma.MarketDataWhereInput[];
    NOT?: Prisma.MarketDataWhereInput | Prisma.MarketDataWhereInput[];
    cmp?: Prisma.DecimalNullableFilter<"MarketData"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    peRatio?: Prisma.DecimalNullableFilter<"MarketData"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    latestEarnings?: Prisma.StringNullableFilter<"MarketData"> | string | null;
    priceSource?: Prisma.StringNullableFilter<"MarketData"> | string | null;
    fundamentalSource?: Prisma.StringNullableFilter<"MarketData"> | string | null;
    lastUpdated?: Prisma.DateTimeFilter<"MarketData"> | Date | string;
    priceHistory?: Prisma.PriceHistoryListRelationFilter;
}, "symbol">;
export type MarketDataOrderByWithAggregationInput = {
    symbol?: Prisma.SortOrder;
    cmp?: Prisma.SortOrderInput | Prisma.SortOrder;
    peRatio?: Prisma.SortOrderInput | Prisma.SortOrder;
    latestEarnings?: Prisma.SortOrderInput | Prisma.SortOrder;
    priceSource?: Prisma.SortOrderInput | Prisma.SortOrder;
    fundamentalSource?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastUpdated?: Prisma.SortOrder;
    _count?: Prisma.MarketDataCountOrderByAggregateInput;
    _avg?: Prisma.MarketDataAvgOrderByAggregateInput;
    _max?: Prisma.MarketDataMaxOrderByAggregateInput;
    _min?: Prisma.MarketDataMinOrderByAggregateInput;
    _sum?: Prisma.MarketDataSumOrderByAggregateInput;
};
export type MarketDataScalarWhereWithAggregatesInput = {
    AND?: Prisma.MarketDataScalarWhereWithAggregatesInput | Prisma.MarketDataScalarWhereWithAggregatesInput[];
    OR?: Prisma.MarketDataScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MarketDataScalarWhereWithAggregatesInput | Prisma.MarketDataScalarWhereWithAggregatesInput[];
    symbol?: Prisma.StringWithAggregatesFilter<"MarketData"> | string;
    cmp?: Prisma.DecimalNullableWithAggregatesFilter<"MarketData"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    peRatio?: Prisma.DecimalNullableWithAggregatesFilter<"MarketData"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    latestEarnings?: Prisma.StringNullableWithAggregatesFilter<"MarketData"> | string | null;
    priceSource?: Prisma.StringNullableWithAggregatesFilter<"MarketData"> | string | null;
    fundamentalSource?: Prisma.StringNullableWithAggregatesFilter<"MarketData"> | string | null;
    lastUpdated?: Prisma.DateTimeWithAggregatesFilter<"MarketData"> | Date | string;
};
export type MarketDataCreateInput = {
    symbol: string;
    cmp?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    peRatio?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    latestEarnings?: string | null;
    priceSource?: string | null;
    fundamentalSource?: string | null;
    lastUpdated?: Date | string;
    priceHistory?: Prisma.PriceHistoryCreateNestedManyWithoutMarketDataInput;
};
export type MarketDataUncheckedCreateInput = {
    symbol: string;
    cmp?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    peRatio?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    latestEarnings?: string | null;
    priceSource?: string | null;
    fundamentalSource?: string | null;
    lastUpdated?: Date | string;
    priceHistory?: Prisma.PriceHistoryUncheckedCreateNestedManyWithoutMarketDataInput;
};
export type MarketDataUpdateInput = {
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    cmp?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    peRatio?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    latestEarnings?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceSource?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fundamentalSource?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastUpdated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    priceHistory?: Prisma.PriceHistoryUpdateManyWithoutMarketDataNestedInput;
};
export type MarketDataUncheckedUpdateInput = {
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    cmp?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    peRatio?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    latestEarnings?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceSource?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fundamentalSource?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastUpdated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    priceHistory?: Prisma.PriceHistoryUncheckedUpdateManyWithoutMarketDataNestedInput;
};
export type MarketDataCreateManyInput = {
    symbol: string;
    cmp?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    peRatio?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    latestEarnings?: string | null;
    priceSource?: string | null;
    fundamentalSource?: string | null;
    lastUpdated?: Date | string;
};
export type MarketDataUpdateManyMutationInput = {
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    cmp?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    peRatio?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    latestEarnings?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceSource?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fundamentalSource?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastUpdated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarketDataUncheckedUpdateManyInput = {
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    cmp?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    peRatio?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    latestEarnings?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceSource?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fundamentalSource?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastUpdated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarketDataCountOrderByAggregateInput = {
    symbol?: Prisma.SortOrder;
    cmp?: Prisma.SortOrder;
    peRatio?: Prisma.SortOrder;
    latestEarnings?: Prisma.SortOrder;
    priceSource?: Prisma.SortOrder;
    fundamentalSource?: Prisma.SortOrder;
    lastUpdated?: Prisma.SortOrder;
};
export type MarketDataAvgOrderByAggregateInput = {
    cmp?: Prisma.SortOrder;
    peRatio?: Prisma.SortOrder;
};
export type MarketDataMaxOrderByAggregateInput = {
    symbol?: Prisma.SortOrder;
    cmp?: Prisma.SortOrder;
    peRatio?: Prisma.SortOrder;
    latestEarnings?: Prisma.SortOrder;
    priceSource?: Prisma.SortOrder;
    fundamentalSource?: Prisma.SortOrder;
    lastUpdated?: Prisma.SortOrder;
};
export type MarketDataMinOrderByAggregateInput = {
    symbol?: Prisma.SortOrder;
    cmp?: Prisma.SortOrder;
    peRatio?: Prisma.SortOrder;
    latestEarnings?: Prisma.SortOrder;
    priceSource?: Prisma.SortOrder;
    fundamentalSource?: Prisma.SortOrder;
    lastUpdated?: Prisma.SortOrder;
};
export type MarketDataSumOrderByAggregateInput = {
    cmp?: Prisma.SortOrder;
    peRatio?: Prisma.SortOrder;
};
export type MarketDataScalarRelationFilter = {
    is?: Prisma.MarketDataWhereInput;
    isNot?: Prisma.MarketDataWhereInput;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type MarketDataCreateNestedOneWithoutPriceHistoryInput = {
    create?: Prisma.XOR<Prisma.MarketDataCreateWithoutPriceHistoryInput, Prisma.MarketDataUncheckedCreateWithoutPriceHistoryInput>;
    connectOrCreate?: Prisma.MarketDataCreateOrConnectWithoutPriceHistoryInput;
    connect?: Prisma.MarketDataWhereUniqueInput;
};
export type MarketDataUpdateOneRequiredWithoutPriceHistoryNestedInput = {
    create?: Prisma.XOR<Prisma.MarketDataCreateWithoutPriceHistoryInput, Prisma.MarketDataUncheckedCreateWithoutPriceHistoryInput>;
    connectOrCreate?: Prisma.MarketDataCreateOrConnectWithoutPriceHistoryInput;
    upsert?: Prisma.MarketDataUpsertWithoutPriceHistoryInput;
    connect?: Prisma.MarketDataWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MarketDataUpdateToOneWithWhereWithoutPriceHistoryInput, Prisma.MarketDataUpdateWithoutPriceHistoryInput>, Prisma.MarketDataUncheckedUpdateWithoutPriceHistoryInput>;
};
export type MarketDataCreateWithoutPriceHistoryInput = {
    symbol: string;
    cmp?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    peRatio?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    latestEarnings?: string | null;
    priceSource?: string | null;
    fundamentalSource?: string | null;
    lastUpdated?: Date | string;
};
export type MarketDataUncheckedCreateWithoutPriceHistoryInput = {
    symbol: string;
    cmp?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    peRatio?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    latestEarnings?: string | null;
    priceSource?: string | null;
    fundamentalSource?: string | null;
    lastUpdated?: Date | string;
};
export type MarketDataCreateOrConnectWithoutPriceHistoryInput = {
    where: Prisma.MarketDataWhereUniqueInput;
    create: Prisma.XOR<Prisma.MarketDataCreateWithoutPriceHistoryInput, Prisma.MarketDataUncheckedCreateWithoutPriceHistoryInput>;
};
export type MarketDataUpsertWithoutPriceHistoryInput = {
    update: Prisma.XOR<Prisma.MarketDataUpdateWithoutPriceHistoryInput, Prisma.MarketDataUncheckedUpdateWithoutPriceHistoryInput>;
    create: Prisma.XOR<Prisma.MarketDataCreateWithoutPriceHistoryInput, Prisma.MarketDataUncheckedCreateWithoutPriceHistoryInput>;
    where?: Prisma.MarketDataWhereInput;
};
export type MarketDataUpdateToOneWithWhereWithoutPriceHistoryInput = {
    where?: Prisma.MarketDataWhereInput;
    data: Prisma.XOR<Prisma.MarketDataUpdateWithoutPriceHistoryInput, Prisma.MarketDataUncheckedUpdateWithoutPriceHistoryInput>;
};
export type MarketDataUpdateWithoutPriceHistoryInput = {
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    cmp?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    peRatio?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    latestEarnings?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceSource?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fundamentalSource?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastUpdated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarketDataUncheckedUpdateWithoutPriceHistoryInput = {
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    cmp?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    peRatio?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    latestEarnings?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceSource?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fundamentalSource?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastUpdated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type MarketDataCountOutputType
 */
export type MarketDataCountOutputType = {
    priceHistory: number;
};
export type MarketDataCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    priceHistory?: boolean | MarketDataCountOutputTypeCountPriceHistoryArgs;
};
/**
 * MarketDataCountOutputType without action
 */
export type MarketDataCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketDataCountOutputType
     */
    select?: Prisma.MarketDataCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * MarketDataCountOutputType without action
 */
export type MarketDataCountOutputTypeCountPriceHistoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PriceHistoryWhereInput;
};
export type MarketDataSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    symbol?: boolean;
    cmp?: boolean;
    peRatio?: boolean;
    latestEarnings?: boolean;
    priceSource?: boolean;
    fundamentalSource?: boolean;
    lastUpdated?: boolean;
    priceHistory?: boolean | Prisma.MarketData$priceHistoryArgs<ExtArgs>;
    _count?: boolean | Prisma.MarketDataCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["marketData"]>;
export type MarketDataSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    symbol?: boolean;
    cmp?: boolean;
    peRatio?: boolean;
    latestEarnings?: boolean;
    priceSource?: boolean;
    fundamentalSource?: boolean;
    lastUpdated?: boolean;
}, ExtArgs["result"]["marketData"]>;
export type MarketDataSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    symbol?: boolean;
    cmp?: boolean;
    peRatio?: boolean;
    latestEarnings?: boolean;
    priceSource?: boolean;
    fundamentalSource?: boolean;
    lastUpdated?: boolean;
}, ExtArgs["result"]["marketData"]>;
export type MarketDataSelectScalar = {
    symbol?: boolean;
    cmp?: boolean;
    peRatio?: boolean;
    latestEarnings?: boolean;
    priceSource?: boolean;
    fundamentalSource?: boolean;
    lastUpdated?: boolean;
};
export type MarketDataOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"symbol" | "cmp" | "peRatio" | "latestEarnings" | "priceSource" | "fundamentalSource" | "lastUpdated", ExtArgs["result"]["marketData"]>;
export type MarketDataInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    priceHistory?: boolean | Prisma.MarketData$priceHistoryArgs<ExtArgs>;
    _count?: boolean | Prisma.MarketDataCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MarketDataIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type MarketDataIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $MarketDataPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MarketData";
    objects: {
        priceHistory: Prisma.$PriceHistoryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        symbol: string;
        cmp: runtime.Decimal | null;
        peRatio: runtime.Decimal | null;
        latestEarnings: string | null;
        priceSource: string | null;
        fundamentalSource: string | null;
        lastUpdated: Date;
    }, ExtArgs["result"]["marketData"]>;
    composites: {};
};
export type MarketDataGetPayload<S extends boolean | null | undefined | MarketDataDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MarketDataPayload, S>;
export type MarketDataCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MarketDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MarketDataCountAggregateInputType | true;
};
export interface MarketDataDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MarketData'];
        meta: {
            name: 'MarketData';
        };
    };
    /**
     * Find zero or one MarketData that matches the filter.
     * @param {MarketDataFindUniqueArgs} args - Arguments to find a MarketData
     * @example
     * // Get one MarketData
     * const marketData = await prisma.marketData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketDataFindUniqueArgs>(args: Prisma.SelectSubset<T, MarketDataFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MarketDataClient<runtime.Types.Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one MarketData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketDataFindUniqueOrThrowArgs} args - Arguments to find a MarketData
     * @example
     * // Get one MarketData
     * const marketData = await prisma.marketData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketDataFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MarketDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MarketDataClient<runtime.Types.Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MarketData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataFindFirstArgs} args - Arguments to find a MarketData
     * @example
     * // Get one MarketData
     * const marketData = await prisma.marketData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketDataFindFirstArgs>(args?: Prisma.SelectSubset<T, MarketDataFindFirstArgs<ExtArgs>>): Prisma.Prisma__MarketDataClient<runtime.Types.Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MarketData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataFindFirstOrThrowArgs} args - Arguments to find a MarketData
     * @example
     * // Get one MarketData
     * const marketData = await prisma.marketData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketDataFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MarketDataFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MarketDataClient<runtime.Types.Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more MarketData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketData
     * const marketData = await prisma.marketData.findMany()
     *
     * // Get first 10 MarketData
     * const marketData = await prisma.marketData.findMany({ take: 10 })
     *
     * // Only select the `symbol`
     * const marketDataWithSymbolOnly = await prisma.marketData.findMany({ select: { symbol: true } })
     *
     */
    findMany<T extends MarketDataFindManyArgs>(args?: Prisma.SelectSubset<T, MarketDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a MarketData.
     * @param {MarketDataCreateArgs} args - Arguments to create a MarketData.
     * @example
     * // Create one MarketData
     * const MarketData = await prisma.marketData.create({
     *   data: {
     *     // ... data to create a MarketData
     *   }
     * })
     *
     */
    create<T extends MarketDataCreateArgs>(args: Prisma.SelectSubset<T, MarketDataCreateArgs<ExtArgs>>): Prisma.Prisma__MarketDataClient<runtime.Types.Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many MarketData.
     * @param {MarketDataCreateManyArgs} args - Arguments to create many MarketData.
     * @example
     * // Create many MarketData
     * const marketData = await prisma.marketData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MarketDataCreateManyArgs>(args?: Prisma.SelectSubset<T, MarketDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many MarketData and returns the data saved in the database.
     * @param {MarketDataCreateManyAndReturnArgs} args - Arguments to create many MarketData.
     * @example
     * // Create many MarketData
     * const marketData = await prisma.marketData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MarketData and only return the `symbol`
     * const marketDataWithSymbolOnly = await prisma.marketData.createManyAndReturn({
     *   select: { symbol: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MarketDataCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MarketDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a MarketData.
     * @param {MarketDataDeleteArgs} args - Arguments to delete one MarketData.
     * @example
     * // Delete one MarketData
     * const MarketData = await prisma.marketData.delete({
     *   where: {
     *     // ... filter to delete one MarketData
     *   }
     * })
     *
     */
    delete<T extends MarketDataDeleteArgs>(args: Prisma.SelectSubset<T, MarketDataDeleteArgs<ExtArgs>>): Prisma.Prisma__MarketDataClient<runtime.Types.Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one MarketData.
     * @param {MarketDataUpdateArgs} args - Arguments to update one MarketData.
     * @example
     * // Update one MarketData
     * const marketData = await prisma.marketData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MarketDataUpdateArgs>(args: Prisma.SelectSubset<T, MarketDataUpdateArgs<ExtArgs>>): Prisma.Prisma__MarketDataClient<runtime.Types.Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more MarketData.
     * @param {MarketDataDeleteManyArgs} args - Arguments to filter MarketData to delete.
     * @example
     * // Delete a few MarketData
     * const { count } = await prisma.marketData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MarketDataDeleteManyArgs>(args?: Prisma.SelectSubset<T, MarketDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MarketData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketData
     * const marketData = await prisma.marketData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MarketDataUpdateManyArgs>(args: Prisma.SelectSubset<T, MarketDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MarketData and returns the data updated in the database.
     * @param {MarketDataUpdateManyAndReturnArgs} args - Arguments to update many MarketData.
     * @example
     * // Update many MarketData
     * const marketData = await prisma.marketData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MarketData and only return the `symbol`
     * const marketDataWithSymbolOnly = await prisma.marketData.updateManyAndReturn({
     *   select: { symbol: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends MarketDataUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MarketDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one MarketData.
     * @param {MarketDataUpsertArgs} args - Arguments to update or create a MarketData.
     * @example
     * // Update or create a MarketData
     * const marketData = await prisma.marketData.upsert({
     *   create: {
     *     // ... data to create a MarketData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketData we want to update
     *   }
     * })
     */
    upsert<T extends MarketDataUpsertArgs>(args: Prisma.SelectSubset<T, MarketDataUpsertArgs<ExtArgs>>): Prisma.Prisma__MarketDataClient<runtime.Types.Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of MarketData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataCountArgs} args - Arguments to filter MarketData to count.
     * @example
     * // Count the number of MarketData
     * const count = await prisma.marketData.count({
     *   where: {
     *     // ... the filter for the MarketData we want to count
     *   }
     * })
    **/
    count<T extends MarketDataCountArgs>(args?: Prisma.Subset<T, MarketDataCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MarketDataCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a MarketData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarketDataAggregateArgs>(args: Prisma.Subset<T, MarketDataAggregateArgs>): Prisma.PrismaPromise<GetMarketDataAggregateType<T>>;
    /**
     * Group by MarketData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends MarketDataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MarketDataGroupByArgs['orderBy'];
    } : {
        orderBy?: MarketDataGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MarketDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MarketData model
     */
    readonly fields: MarketDataFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for MarketData.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MarketDataClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    priceHistory<T extends Prisma.MarketData$priceHistoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MarketData$priceHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the MarketData model
 */
export interface MarketDataFieldRefs {
    readonly symbol: Prisma.FieldRef<"MarketData", 'String'>;
    readonly cmp: Prisma.FieldRef<"MarketData", 'Decimal'>;
    readonly peRatio: Prisma.FieldRef<"MarketData", 'Decimal'>;
    readonly latestEarnings: Prisma.FieldRef<"MarketData", 'String'>;
    readonly priceSource: Prisma.FieldRef<"MarketData", 'String'>;
    readonly fundamentalSource: Prisma.FieldRef<"MarketData", 'String'>;
    readonly lastUpdated: Prisma.FieldRef<"MarketData", 'DateTime'>;
}
/**
 * MarketData findUnique
 */
export type MarketDataFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: Prisma.MarketDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarketData
     */
    omit?: Prisma.MarketDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MarketDataInclude<ExtArgs> | null;
    /**
     * Filter, which MarketData to fetch.
     */
    where: Prisma.MarketDataWhereUniqueInput;
};
/**
 * MarketData findUniqueOrThrow
 */
export type MarketDataFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: Prisma.MarketDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarketData
     */
    omit?: Prisma.MarketDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MarketDataInclude<ExtArgs> | null;
    /**
     * Filter, which MarketData to fetch.
     */
    where: Prisma.MarketDataWhereUniqueInput;
};
/**
 * MarketData findFirst
 */
export type MarketDataFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: Prisma.MarketDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarketData
     */
    omit?: Prisma.MarketDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MarketDataInclude<ExtArgs> | null;
    /**
     * Filter, which MarketData to fetch.
     */
    where?: Prisma.MarketDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MarketData to fetch.
     */
    orderBy?: Prisma.MarketDataOrderByWithRelationInput | Prisma.MarketDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MarketData.
     */
    cursor?: Prisma.MarketDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MarketData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MarketData.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MarketData.
     */
    distinct?: Prisma.MarketDataScalarFieldEnum | Prisma.MarketDataScalarFieldEnum[];
};
/**
 * MarketData findFirstOrThrow
 */
export type MarketDataFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: Prisma.MarketDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarketData
     */
    omit?: Prisma.MarketDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MarketDataInclude<ExtArgs> | null;
    /**
     * Filter, which MarketData to fetch.
     */
    where?: Prisma.MarketDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MarketData to fetch.
     */
    orderBy?: Prisma.MarketDataOrderByWithRelationInput | Prisma.MarketDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MarketData.
     */
    cursor?: Prisma.MarketDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MarketData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MarketData.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MarketData.
     */
    distinct?: Prisma.MarketDataScalarFieldEnum | Prisma.MarketDataScalarFieldEnum[];
};
/**
 * MarketData findMany
 */
export type MarketDataFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: Prisma.MarketDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarketData
     */
    omit?: Prisma.MarketDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MarketDataInclude<ExtArgs> | null;
    /**
     * Filter, which MarketData to fetch.
     */
    where?: Prisma.MarketDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MarketData to fetch.
     */
    orderBy?: Prisma.MarketDataOrderByWithRelationInput | Prisma.MarketDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MarketData.
     */
    cursor?: Prisma.MarketDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MarketData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MarketData.
     */
    skip?: number;
    distinct?: Prisma.MarketDataScalarFieldEnum | Prisma.MarketDataScalarFieldEnum[];
};
/**
 * MarketData create
 */
export type MarketDataCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: Prisma.MarketDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarketData
     */
    omit?: Prisma.MarketDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MarketDataInclude<ExtArgs> | null;
    /**
     * The data needed to create a MarketData.
     */
    data: Prisma.XOR<Prisma.MarketDataCreateInput, Prisma.MarketDataUncheckedCreateInput>;
};
/**
 * MarketData createMany
 */
export type MarketDataCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketData.
     */
    data: Prisma.MarketDataCreateManyInput | Prisma.MarketDataCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MarketData createManyAndReturn
 */
export type MarketDataCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: Prisma.MarketDataSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MarketData
     */
    omit?: Prisma.MarketDataOmit<ExtArgs> | null;
    /**
     * The data used to create many MarketData.
     */
    data: Prisma.MarketDataCreateManyInput | Prisma.MarketDataCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MarketData update
 */
export type MarketDataUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: Prisma.MarketDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarketData
     */
    omit?: Prisma.MarketDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MarketDataInclude<ExtArgs> | null;
    /**
     * The data needed to update a MarketData.
     */
    data: Prisma.XOR<Prisma.MarketDataUpdateInput, Prisma.MarketDataUncheckedUpdateInput>;
    /**
     * Choose, which MarketData to update.
     */
    where: Prisma.MarketDataWhereUniqueInput;
};
/**
 * MarketData updateMany
 */
export type MarketDataUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketData.
     */
    data: Prisma.XOR<Prisma.MarketDataUpdateManyMutationInput, Prisma.MarketDataUncheckedUpdateManyInput>;
    /**
     * Filter which MarketData to update
     */
    where?: Prisma.MarketDataWhereInput;
    /**
     * Limit how many MarketData to update.
     */
    limit?: number;
};
/**
 * MarketData updateManyAndReturn
 */
export type MarketDataUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: Prisma.MarketDataSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MarketData
     */
    omit?: Prisma.MarketDataOmit<ExtArgs> | null;
    /**
     * The data used to update MarketData.
     */
    data: Prisma.XOR<Prisma.MarketDataUpdateManyMutationInput, Prisma.MarketDataUncheckedUpdateManyInput>;
    /**
     * Filter which MarketData to update
     */
    where?: Prisma.MarketDataWhereInput;
    /**
     * Limit how many MarketData to update.
     */
    limit?: number;
};
/**
 * MarketData upsert
 */
export type MarketDataUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: Prisma.MarketDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarketData
     */
    omit?: Prisma.MarketDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MarketDataInclude<ExtArgs> | null;
    /**
     * The filter to search for the MarketData to update in case it exists.
     */
    where: Prisma.MarketDataWhereUniqueInput;
    /**
     * In case the MarketData found by the `where` argument doesn't exist, create a new MarketData with this data.
     */
    create: Prisma.XOR<Prisma.MarketDataCreateInput, Prisma.MarketDataUncheckedCreateInput>;
    /**
     * In case the MarketData was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MarketDataUpdateInput, Prisma.MarketDataUncheckedUpdateInput>;
};
/**
 * MarketData delete
 */
export type MarketDataDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: Prisma.MarketDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarketData
     */
    omit?: Prisma.MarketDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MarketDataInclude<ExtArgs> | null;
    /**
     * Filter which MarketData to delete.
     */
    where: Prisma.MarketDataWhereUniqueInput;
};
/**
 * MarketData deleteMany
 */
export type MarketDataDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MarketData to delete
     */
    where?: Prisma.MarketDataWhereInput;
    /**
     * Limit how many MarketData to delete.
     */
    limit?: number;
};
/**
 * MarketData.priceHistory
 */
export type MarketData$priceHistoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: Prisma.PriceHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: Prisma.PriceHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriceHistoryInclude<ExtArgs> | null;
    where?: Prisma.PriceHistoryWhereInput;
    orderBy?: Prisma.PriceHistoryOrderByWithRelationInput | Prisma.PriceHistoryOrderByWithRelationInput[];
    cursor?: Prisma.PriceHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PriceHistoryScalarFieldEnum | Prisma.PriceHistoryScalarFieldEnum[];
};
/**
 * MarketData without action
 */
export type MarketDataDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: Prisma.MarketDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarketData
     */
    omit?: Prisma.MarketDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MarketDataInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=MarketData.d.ts.map