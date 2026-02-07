import { WebSocket, WebSocketServer } from 'ws';
import { logger } from '../utils/logger.js';
import type { PortfolioUpdateEvent } from '../types/marketData.js';

const wss = new WebSocketServer({ port: 8081 });

wss.on('connection', (ws: WebSocket) => {
  logger.info({ clients: wss.clients.size }, ' client connected');

  ws.on('error', (error) => {
    logger.error({ error }, 'WebSocket error');
  });

  ws.on('close', () => {
    logger.info({ clients: wss.clients.size }, 'WebSocket client disconnected');
  });

  ws.on('message', (msg, isBinary) => {
    const msgStr = msg.toString('utf-8');
    logger.debug({ message: msgStr }, 'WebSocket message received');
    
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ echo: msgStr }), { binary: isBinary });
    }
  });
});

wss.on('error', (error) => {
  logger.error({ error }, 'WebSocket server error');
});

export const broadcastPortfolioUpdate = (data: PortfolioUpdateEvent['data']): void => {
  const event: PortfolioUpdateEvent = {
    type: 'portfolio_update',
    timestamp: new Date(),
    data,
  };

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
