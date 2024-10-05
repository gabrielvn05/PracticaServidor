"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var verifyToken = function (req, res, next) {
    var token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado, token requerido' });
    }
    try {
        var decoded = jsonwebtoken_1.default.verify(token, 'CSE211214');
        req.user = decoded;
        if (req.user.Estado !== 'Activo') {
            return res.status(403).json({ message: 'Usuario inactivo' });
        }
        next();
    }
    catch (error) {
        res.status(403).json({ message: 'Token no válido' });
    }
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=authmiddleware.js.map