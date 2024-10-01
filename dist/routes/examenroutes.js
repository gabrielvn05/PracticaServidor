"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var examencontroller_1 = require("../controllers/examencontroller");
var router = (0, express_1.Router)();
router.get('/examenes', examencontroller_1.getExamenes);
router.get('/examenes/:id', examencontroller_1.getExamen);
router.post('/examenes', examencontroller_1.createExamen);
router.patch('/examenes/:id', examencontroller_1.updateExamen);
router.delete('/examenes/:id', examencontroller_1.deleteExamen);
exports.default = router;
//# sourceMappingURL=examenroutes.js.map