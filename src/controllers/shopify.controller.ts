import crypto from 'crypto';
import { Request, Response } from 'express';
import { config } from '../config/config';
import shopifyService from '../services/shopify.service';

class ShopifyController {
    handleNewOrder(req: Request, res: Response): void {
        try {
            const hmac = req.get('X-Shopify-Hmac-Sha256') as string;
            const generatedHash = crypto
                .createHmac('sha256', `${config.SHOPIFY_SIGNING_SECRET}`)
                .update(req.rawBody, 'utf8')
                .digest('base64');

            if (generatedHash !== hmac) {
                res.status(401).send('Unauthorized');
            }

            shopifyService.processNewOrderStock(req.body);
        } catch (e) {
            console.log('Error in handle new order ', e);
            res.status(400).send(JSON.stringify(e));
        } finally {
            res.status(200).send('OK');
        }
    }

    handleCancelledOrder() {}
}

export default new ShopifyController();
