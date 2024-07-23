import crypto from 'crypto';
import { Request, Response } from 'express';

class ShopifyController {
    SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN as string;

    handleNewOrder(req: Request, res: Response) {
        try {
            const hmac = req.get('X-Shopify-Hmac-Sha256') as string;
            const generatedHash = crypto
                .createHmac('sha256', this.SHOPIFY_ACCESS_TOKEN)
                .update(req.rawBody, 'utf8')
                .digest('base64');

            if (generatedHash !== hmac) {
                return res.status(401).send('Unauthorized');
            }

            const order = req.body;
            console.log('Nueva orden recibida:', order);
        } catch (e) {
            console.log(e);
            res.status(400).send(JSON.stringify(e));
        }
        res.status(200).send('OK');
    }

    handleCancelledOrder() {}
}

export default new ShopifyController();
