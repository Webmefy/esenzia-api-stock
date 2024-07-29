import { Router } from 'express';
import health from './health.route';
import shopify from './shopify.route';

const router = Router();

router.use('/health', health);
router.use('/shopify', shopify);

export default router;
