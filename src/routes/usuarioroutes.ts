import { Router } from 'express';
import { register, login } from '../controllers/usuariocontroller';

const router = Router();

router.post('/registrar', register);
router.post('/login', login);

export default router;
