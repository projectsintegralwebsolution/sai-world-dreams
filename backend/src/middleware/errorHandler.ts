import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  // Handle syntax error from malformed JSON in request body
  if (err instanceof SyntaxError && 'body' in err) {
    res.status(400).json({
      success: false,
      message: 'Invalid JSON payload received.',
    });
    return;
  }

  // Handle payload too large
  if (err.type === 'entity.too.large') {
    res.status(413).json({
      success: false,
      message: 'Request payload exceeds the maximum allowed size (50KB).',
    });
    return;
  }

  console.error('[UNHANDLED ERROR]', err.message || err);

  // Return generic, safe error response
  res.status(500).json({
    success: false,
    message: 'An unexpected internal error occurred. Please try again later or call our sales line directly.',
  });
};
