"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
var User_1 = require("../entity/User");
var data_source_1 = require("../data-source");
var bcrypt = __importStar(require("bcrypt"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Registro de usuario
var register = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, Nombre, Clave, Estado, existingUser, hashedPassword, usuario, result, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, Nombre = _a.Nombre, Clave = _a.Clave, Estado = _a.Estado;
                // Validar los datos
                if (!Nombre || !Clave || !Estado) {
                    return [2 /*return*/, res.status(400).json({ message: 'Todos los campos son obligatorios' })];
                }
                return [4 /*yield*/, data_source_1.AppDataSource.getRepository(User_1.Usuario).findOneBy({ Nombre: Nombre })];
            case 1:
                existingUser = _b.sent();
                if (existingUser) {
                    return [2 /*return*/, res.status(400).json({ message: 'El usuario ya existe' })];
                }
                return [4 /*yield*/, bcrypt.hash(Clave, 10)];
            case 2:
                hashedPassword = _b.sent();
                usuario = new User_1.Usuario();
                usuario.Nombre = Nombre;
                usuario.Clave = hashedPassword; // Guardar la clave hasheada
                usuario.Estado = Estado;
                return [4 /*yield*/, data_source_1.AppDataSource.getRepository(User_1.Usuario).save(usuario)];
            case 3:
                result = _b.sent();
                console.log('Usuario registrado:', result);
                res.status(201).json({ message: 'Usuario registrado exitosamente', usuario: result });
                return [3 /*break*/, 5];
            case 4:
                error_1 = _b.sent();
                console.error('Error al registrar usuario:', error_1);
                res.status(500).json({ message: 'Error al registrar usuario' });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.register = register;
// Inicio de sesión
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, Nombre, Clave, usuario, isPasswordValid, token, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, Nombre = _a.Nombre, Clave = _a.Clave;
                // Validar los datos
                if (!Nombre || !Clave) {
                    return [2 /*return*/, res.status(400).json({ message: 'Nombre y clave son obligatorios' })];
                }
                return [4 /*yield*/, data_source_1.AppDataSource.getRepository(User_1.Usuario).findOneBy({ Nombre: Nombre })];
            case 1:
                usuario = _b.sent();
                if (!usuario) {
                    return [2 /*return*/, res.status(400).json({ message: 'Usuario no encontrado' })];
                }
                return [4 /*yield*/, bcrypt.compare(Clave, usuario.Clave)];
            case 2:
                isPasswordValid = _b.sent();
                if (!isPasswordValid) {
                    return [2 /*return*/, res.status(401).json({ message: 'Contraseña incorrecta' })];
                }
                // Verificar si el usuario está activo
                if (usuario.Estado !== 'Activo') {
                    return [2 /*return*/, res.status(403).json({ message: 'Usuario inactivo' })];
                }
                token = jsonwebtoken_1.default.sign({ ID: usuario.ID, Nombre: usuario.Nombre, Estado: usuario.Estado }, process.env.JWT_SECRET || '211214CSE', // Asegúrate de usar un valor seguro en entorno
                { expiresIn: '1h' });
                res.json({ message: 'Inicio de sesión exitoso', token: token });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _b.sent();
                console.error('Error al iniciar sesión:', error_2);
                res.status(500).json({ message: 'Error al iniciar sesión' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
//# sourceMappingURL=usuariocontroller.js.map