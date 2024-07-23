import { Router } from 'express';
import shopify from './shopify.route';

const router = Router();

router.use('/shopify', shopify);

export default router;
