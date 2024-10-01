"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var insumoevaluacioncontroller_1 = require("../controllers/insumoevaluacioncontroller");
var router = (0, express_1.Router)();
router.get('/insumos-evaluacion', insumoevaluacioncontroller_1.getInsumosEvaluacion);
router.get('/insumos-evaluacion/:id', insumoevaluacioncontroller_1.getInsumoEvaluacion);
router.post('/insumos-evaluacion', insumoevaluacioncontroller_1.createInsumoEvaluacion);
router.patch('/insumos-evaluacion/:id', insumoevaluacioncontroller_1.updateInsumoEvaluacion);
router.delete('/insumos-evaluacion/:id', insumoevaluacioncontroller_1.deleteInsumoEvaluacion);
exports.default = router;
//# sourceMappingURL=insumoevaluacionroutes.js.map