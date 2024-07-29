import { Router } from 'express';
import healthController from '../controllers/health.controller';

const health = Router();

health.get('/', healthController.status);

export default health;
