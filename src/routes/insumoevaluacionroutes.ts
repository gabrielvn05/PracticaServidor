import { Router } from 'express';
import { getInsumosEvaluacion, getInsumoEvaluacion, createInsumoEvaluacion, updateInsumoEvaluacion, deleteInsumoEvaluacion } from '../controllers/insumoevaluacioncontroller';

const router = Router();

router.get('/insumos-evaluacion', getInsumosEvaluacion);
router.get('/insumos-evaluacion/:id', getInsumoEvaluacion);
router.post('/insumos-evaluacion', createInsumoEvaluacion);
router.patch('/insumos-evaluacion/:id', updateInsumoEvaluacion);
router.delete('/insumos-evaluacion/:id', deleteInsumoEvaluacion);

export default router;
