import { NextFunction, Request, Response } from 'express';
import { createLogger, format, transports } from 'winston';

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
    ),
    transports: [new transports.Console(), new transports.File({ filename: 'combined.log' })],
});

const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
    logger.info(`${req.method} ${req.url} - Body: ${JSON.stringify(req.body)}`);
    next();
};

export { logger, requestLogger };
