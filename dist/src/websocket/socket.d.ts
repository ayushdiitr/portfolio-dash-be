import { WebSocket } from 'ws';
import type { PortfolioUpdateEvent } from '../types/marketData.js';
declare const wss: import("ws").Server<typeof WebSocket, typeof import("node:http").IncomingMessage>;
export declare const broadcastPortfolioUpdate: (data: PortfolioUpdateEvent["data"]) => void;
export { wss };
//# sourceMappingURL=socket.d.ts.map