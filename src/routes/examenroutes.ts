import { Router } from 'express';
import { getExamenes, getExamen, createExamen, updateExamen, deleteExamen } from '../controllers/examencontroller';

const router = Router();

router.get('/examenes', getExamenes);
router.get('/examenes/:id', getExamen);
router.post('/examenes', createExamen);
router.put('/examenes/:id', updateExamen);
router.delete('/examenes/:id', deleteExamen);

export default router;
