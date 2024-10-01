"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var preguntacontroller_1 = require("../controllers/preguntacontroller");
var router = (0, express_1.Router)();
router.get('/preguntas', preguntacontroller_1.getPreguntas);
router.get('/preguntas/:id', preguntacontroller_1.getPregunta);
router.post('/preguntas', preguntacontroller_1.createPregunta);
router.put('/preguntas/:id', preguntacontroller_1.updatePregunta);
router.delete('/preguntas/:id', preguntacontroller_1.deletePregunta);
exports.default = router;
//# sourceMappingURL=preguntaroutes.js.map