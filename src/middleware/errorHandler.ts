import type { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger.js';
import { Prisma } from '../../generated/prisma/client.js';

export class AppError extends Error {
  constructor(
    public statusCode: number,
    msg: string,
    public isOperational = true
  ) {
    super(msg);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  
  logger.error(
    {
      err,
      url: req.url,
      method: req.method,
      stack: err.stack,
    },
    'Error occurred'
  );

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2002') {
      return res.status(409).json({
        error: 'Duplicate entry',
        message: 'A record with this value already exists',
      });
    }
    if (err.code === 'P2025') {
      return res.status(404).json({
        error: 'Not found',
        message: 'The data was not found',
      });
    }
    return res.status(500).json({
      error: 'DB error',
      message: 'An error occurred while accessing the database',
    });
  }

  if (err instanceof Prisma.PrismaClientValidationError) {
    return res.status(400).json({
      error: 'Validation error',
      message: 'Invalid data provided',
    });
  }

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: err.name,
      message: err.message,
    });
  }

  return res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'production' 
      ? 'An unexpected error occurred' 
      : err.message,
  });
};

export const notFoundHandler = (req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not found',
    message: `Route ${req.method} ${req.path} not found`,
  });
};
