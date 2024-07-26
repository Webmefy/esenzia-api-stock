import express, { Request, Response } from 'express';

const jsonParserMiddleware = express.json({
    verify: (req: Request, res: Response, buf: Buffer) => {
        req.rawBody = buf.toString();
    },
});

export default jsonParserMiddleware;
