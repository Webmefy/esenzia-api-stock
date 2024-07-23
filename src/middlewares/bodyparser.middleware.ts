import bodyParser from 'body-parser';
import { Request, Response } from 'express';

const bodyParserMiddleware = bodyParser.json({
    verify: (req: Request, res: Response, buf: Buffer) => {
        req.rawBody = buf.toString();
    },
});

export default bodyParserMiddleware