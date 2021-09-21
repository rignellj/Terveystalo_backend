import { Router } from 'express';

import sumController from '../controllers/sum';

const router = Router();

router.get('/', sumController.sum);

export default router;
