import { Router } from 'express';
import shopifyController from '../controllers/shopify.controller';

const shopify = Router();

shopify.post('/webhook/orders/create', shopifyController.handleNewOrder);
shopify.post('/webhook/orders/cancellation', shopifyController.handleCancelledOrder);

export default shopify;
