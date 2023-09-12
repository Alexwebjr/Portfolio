import { Router } from 'express';
import { getHome } from '../controllers/homeController';
import { sentMessage } from '../controllers/homeController';

const router = Router();

router.get('/', getHome);
router.post('/ContactMail', sentMessage);

export default router;
