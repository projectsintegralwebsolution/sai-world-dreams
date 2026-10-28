import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { config } from './config/env';
import enquiryRoutes from './routes/enquiryRoutes';
import { errorHandler } from './middleware/errorHandler';

export const createApp = (): Application => {
  const app: Application = express();

  // 1. Security Headers via Helmet
  app.use(helmet());

  // 2. Strict CORS Configuration
  app.use(
    cors({
      origin: (origin, callback) => {
        // Allow requests with no origin (e.g. server-to-server, mobile apps, curl, or Postman)
        if (!origin) return callback(null, true);

        // Check if origin is allowed or matches configured frontend URLs
        const isAllowed =
          config.frontendUrls.includes('*') ||
          config.frontendUrls.includes(origin) ||
          config.frontendUrls.some((allowed) => {
            if (allowed.startsWith('*.')) {
              const domain = allowed.slice(2);
              return origin.endsWith(domain);
            }
            return false;
          });

        if (isAllowed || config.nodeEnv === 'development') {
          return callback(null, true);
        }

        return callback(new Error(`CORS origin not allowed: ${origin}`));
      },
      credentials: true,
      methods: ['GET', 'POST', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
    })
  );

  // 3. Body Parsers with safe payload limits
  app.use(express.json({ limit: '50kb' }));
  app.use(express.urlencoded({ extended: true, limit: '50kb' }));

  // 4. API Routes
  app.use('/api', enquiryRoutes);

  // 5. Root Ping
  app.get('/', (_req: Request, res: Response) => {
    res.status(200).json({
      service: 'Sai World Dreams Backend API',
      status: 'active',
      endpoints: {
        enquiries: 'POST /api/enquiries',
        health: 'GET /api/health',
      },
    });
  });

  // 6. 404 Catch-All
  app.use((_req: Request, res: Response) => {
    res.status(404).json({
      success: false,
      message: 'Resource not found.',
    });
  });

  // 7. Global Error Handler
  app.use(errorHandler);

  return app;
};
