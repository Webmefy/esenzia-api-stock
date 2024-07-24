import crypto from 'crypto';
import { Request, Response } from 'express';

class ShopifyController {
    handleNewOrder(req: Request, res: Response): void {
        try {
            const hmac = req.get('X-Shopify-Hmac-Sha256') as string;
            const generatedHash = crypto
                .createHmac('sha256', `${process.env.SHOPIFY_SIGNING_SECRET}`)
                .update(req.rawBody, 'utf8')
                .digest('base64');

            if (generatedHash !== hmac) {
                res.status(401).send('Unauthorized');
            }

            const order = req.body;
        } catch (e) {
            console.log('Error in handle new order ', e);
            res.status(400).send(JSON.stringify(e));
        }
        res.status(200).send('OK');
    }

    handleCancelledOrder() {}
}

export default new ShopifyController();
