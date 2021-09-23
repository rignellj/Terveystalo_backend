import { Router } from 'express';

import checkPrimeController from '../controllers/checkPrime';

const router = Router();

router.get('/', checkPrimeController.checkPrime);

export default router;
