"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePregunta = exports.updatePregunta = exports.createPregunta = exports.getPregunta = exports.getPreguntas = void 0;
var data_source_1 = require("../data-source");
var User_1 = require("../entity/User");
var getPreguntas = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var preguntas, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, data_source_1.AppDataSource.getRepository(User_1.Pregunta).find()];
            case 1:
                preguntas = _a.sent();
                res.json(preguntas);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error('Error al obtener las preguntas:', error_1);
                res.status(500).json({ message: 'Error al obtener las preguntas' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getPreguntas = getPreguntas;
var getPregunta = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var pregunta, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, data_source_1.AppDataSource.getRepository(User_1.Pregunta).findOneBy({
                        ID: parseInt(req.params.id, 10),
                    })];
            case 1:
                pregunta = _a.sent();
                if (pregunta) {
                    res.json(pregunta);
                }
                else {
                    res.status(404).json({ message: "Pregunta con ID ".concat(req.params.id, " no encontrada") });
                }
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error('Error al obtener la pregunta:', error_2);
                res.status(500).json({ message: 'Error al obtener la pregunta' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getPregunta = getPregunta;
var createPregunta = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var pregunta, result, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                pregunta = data_source_1.AppDataSource.getRepository(User_1.Pregunta).create(req.body);
                return [4 /*yield*/, data_source_1.AppDataSource.getRepository(User_1.Pregunta).save(pregunta)];
            case 1:
                result = _a.sent();
                res.status(201).json(result);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.error('Error al crear la pregunta:', error_3);
                res.status(500).json({ message: 'Error al crear la pregunta' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createPregunta = createPregunta;
var updatePregunta = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var preguntaId, pregunta, updatedPregunta, result, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                preguntaId = parseInt(req.params.id, 10);
                console.log("Intentando actualizar la pregunta con ID: ".concat(preguntaId));
                return [4 /*yield*/, data_source_1.AppDataSource.getRepository(User_1.Pregunta).findOneBy({
                        ID: preguntaId,
                    })];
            case 1:
                pregunta = _a.sent();
                if (!pregunta) {
                    return [2 /*return*/, res.status(404).json({ message: "Pregunta con ID ".concat(preguntaId, " no encontrada") })];
                }
                console.log("Pregunta encontrada:", pregunta);
                updatedPregunta = data_source_1.AppDataSource.getRepository(User_1.Pregunta).merge(pregunta, req.body);
                return [4 /*yield*/, data_source_1.AppDataSource.getRepository(User_1.Pregunta).save(updatedPregunta)];
            case 2:
                result = _a.sent();
                console.log("Pregunta actualizada:", result);
                res.json(result);
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                console.error('Error al actualizar la pregunta:', error_4);
                res.status(500).json({ message: 'Error al actualizar la pregunta' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updatePregunta = updatePregunta;
var deletePregunta = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, data_source_1.AppDataSource.getRepository(User_1.Pregunta).delete(req.params.id)];
            case 1:
                result = _a.sent();
                if (result.affected === 0) {
                    return [2 /*return*/, res.status(404).json({ message: 'Pregunta no encontrada para eliminar' })];
                }
                res.json({ message: 'Pregunta eliminada con éxito' });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                console.error('Error al eliminar la pregunta:', error_5);
                res.status(500).json({ message: 'Error al eliminar la pregunta' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deletePregunta = deletePregunta;
//# sourceMappingURL=preguntacontroller.js.map