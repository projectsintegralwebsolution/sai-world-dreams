import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
// Also attempt loading from project root .env if running from monorepo/root
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

export interface AppConfig {
  port: number;
  nodeEnv: string;
  frontendUrls: string[];
  smtp: {
    host: string;
    port: number;
    secure: boolean;
    user: string;
    pass: string;
    from: string;
  };
  saiWorldEmail: string;
  integralWebSolutionEmail: string;
}

const parsePort = (val?: string): number => {
  const p = parseInt(val || '5000', 10);
  return isNaN(p) ? 5000 : p;
};

const parseFrontendUrls = (val?: string): string[] => {
  const defaultUrls = [
    'http://localhost:3000',
    'http://localhost:3005',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:3005',
  ];
  if (!val) return defaultUrls;
  const urls = val.split(',').map((u) => u.trim()).filter(Boolean);
  return urls.length > 0 ? urls : defaultUrls;
};

export const config: AppConfig = {
  port: parsePort(process.env.PORT),
  nodeEnv: process.env.NODE_ENV || 'development',
  frontendUrls: parseFrontendUrls(process.env.FRONTEND_URL),
  smtp: {
    host: process.env.SMTP_HOST || '',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
    from: process.env.SMTP_FROM || 'Sai World Dreams <no-reply@saiworlddreams.com>',
  },
  // Official owner/management email - configurable via SAI_WORLD_EMAIL
  saiWorldEmail: process.env.SAI_WORLD_EMAIL || 'shelterproperties78@gmail.com',
  // Integral Web Solution email - strictly princekumarjha80@gmail.com
  integralWebSolutionEmail: process.env.INTEGRAL_WEB_SOLUTION_EMAIL || 'princekumarjha80@gmail.com',
};

export const validateConfig = (): { isValid: boolean; warnings: string[] } => {
  const warnings: string[] = [];

  if (!config.smtp.host || !config.smtp.user || !config.smtp.pass) {
    warnings.push(
      'SMTP credentials are not fully configured in .env (SMTP_HOST, SMTP_USER, SMTP_PASS). Outgoing email delivery will be simulated/logged.'
    );
  }

  if (!process.env.SAI_WORLD_EMAIL) {
    warnings.push(
      `SAI_WORLD_EMAIL is not explicitly defined in .env. Using fallback: ${config.saiWorldEmail}`
    );
  }

  return {
    isValid: true,
    warnings,
  };
};
