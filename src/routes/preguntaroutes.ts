import { Router } from 'express';
import { getPreguntas, getPregunta, createPregunta, updatePregunta, deletePregunta } from '../controllers/preguntacontroller';

const router = Router();

router.get('/preguntas', getPreguntas);
router.get('/preguntas/:id', getPregunta);
router.post('/preguntas', createPregunta);
router.patch('/preguntas/:id', updatePregunta);
router.delete('/preguntas/:id', deletePregunta);

export default router;
