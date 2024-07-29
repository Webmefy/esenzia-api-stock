import { Request, Response } from 'express';
class HealthController {
    status(req: Request, res: Response) {
        return res.send('healthy!').status(200);
    }
}

export default new HealthController();
