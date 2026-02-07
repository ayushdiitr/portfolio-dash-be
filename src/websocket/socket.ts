import { WebSocket, WebSocketServer } from 'ws';
import { logger } from '../utils/logger.js';
import type { PortfolioUpdateEvent } from '../types/marketData.js';
import type { Server } from 'http';

// const wss = new WebSocketServer({ port: 8081 });

let wss: WebSocketServer | null = null;
export function startWS(server: Server) {
    wss = new WebSocketServer({ server });
  
    wss.on("connection", (ws: WebSocket) => {
      logger.info({ clients: wss?.clients.size }, "WebSocket client connected");
  
      ws.on("error", (error) => {
        logger.error({ error }, "WebSocket error");
      });
  
      ws.on("close", () => {
        logger.info(
          { clients: wss?.clients.size },
          "WebSocket client disconnected"
        );
      });
  
      ws.on("message", (msg, isBinary) => {
        const msgStr = msg.toString("utf-8");
        logger.debug({ message: msgStr }, "WebSocket message received");
  
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({ echo: msgStr }), { binary: isBinary });
        }
      });
    });
  
    wss.on("error", (error) => {
      logger.error({ error }, "WebSocket server error");
    });
  
    logger.info("WebSocket server started");
  }

export const broadcastPortfolioUpdate = (data: PortfolioUpdateEvent['data']): void => {
  const event: PortfolioUpdateEvent = {
    type: 'portfolio_update',
    timestamp: new Date(),
    data,
  };
  if(!wss) {
      logger.warn("Wss not started yet") 
        return
    }


  const message = JSON.stringify(event);
  let sentCnt = 0;

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      try {
        client.send(message);
        sentCnt++;
      } catch (error) {
        logger.error({ error }, 'Failed to send WebSocket message');
      }
    }
  });

  logger.info(
    {
      clients: wss.clients.size,
      sent: sentCnt,
    },
    'Portfolio update broadcasted'
  );
};

export { wss };
