import { Router } from 'express';
import shopifyController from '../controllers/shopify.controller';

const shopify = Router();

shopify.post('/webhook/order/create', shopifyController.handleNewOrder);
shopify.post('/webhook/order/cancellation', shopifyController.handleCancelledOrder);

export default shopify;
