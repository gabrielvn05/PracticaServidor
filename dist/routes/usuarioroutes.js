"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuariocontroller_1 = require("../controllers/usuariocontroller");
var router = (0, express_1.Router)();
router.post('/registrar', usuariocontroller_1.register);
router.post('/login', usuariocontroller_1.login);
exports.default = router;
//# sourceMappingURL=usuarioroutes.js.map