import { createApp } from './app';
import { config, validateConfig } from './config/env';

const startServer = (): void => {
  const { warnings } = validateConfig();
  if (warnings.length > 0) {
    console.warn('\n--- [BACKEND CONFIGURATION NOTICES] ---');
    warnings.forEach((w) => console.warn(`! ${w}`));
    console.warn('----------------------------------------\n');
  }

  const app = createApp();

  const server = app.listen(config.port, () => {
    console.log(`
======================================================
  Sai World Dreams — Backend Service
  Running in ${config.nodeEnv.toUpperCase()} mode
  Listening on: http://localhost:${config.port}
  Enquiry Endpoint: http://localhost:${config.port}/api/enquiries
  Health Check: http://localhost:${config.port}/api/health
======================================================
    `);
  });

  // Graceful shutdown handling
  const shutdown = (signal: string) => {
    console.log(`\n[SHUTDOWN] Received ${signal}. Closing server gracefully...`);
    server.close(() => {
      console.log('[SHUTDOWN] Server closed. Exiting process.');
      process.exit(0);
    });

    // Force exit after 10 seconds if hanging
    setTimeout(() => {
      console.error('[SHUTDOWN] Force exiting after timeout.');
      process.exit(1);
    }, 10000).unref();
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
};

startServer();
