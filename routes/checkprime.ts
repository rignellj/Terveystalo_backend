import { Router } from 'express';

import checkprimeController from '../controllers/checkprime';

const router = Router();

router.get('/', checkprimeController.checkprime);

export default router;
