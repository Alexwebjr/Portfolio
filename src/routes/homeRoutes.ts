import { Router } from 'express';
import { getHome, getPortfolio } from '../controllers/homeController';
import { sentMessage } from '../controllers/homeController';

const router = Router();

router.get('/', getHome);
router.route('/portfolio/:id').get(getPortfolio);
router.post('/contactMail', sentMessage);

export default router;
