import { Router } from 'express';
import itemsRouter from './routes/items';

const router = Router();
export default router;

router.use('/items', itemsRouter);
