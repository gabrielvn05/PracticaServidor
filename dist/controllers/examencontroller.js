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
exports.deleteExamen = exports.updateExamen = exports.createExamen = exports.getExamen = exports.getExamenes = void 0;
var data_source_1 = require("../data-source");
var User_1 = require("../entity/User");
var getExamenes = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var examenes;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_source_1.AppDataSource.getRepository(User_1.Examen).find()];
            case 1:
                examenes = _a.sent();
                res.json(examenes);
                return [2 /*return*/];
        }
    });
}); };
exports.getExamenes = getExamenes;
var getExamen = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var examen;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_source_1.AppDataSource.getRepository(User_1.Examen).findOneBy({
                    ID: parseInt(req.params.id, 10),
                })];
            case 1:
                examen = _a.sent();
                if (examen) {
                    res.json(examen);
                }
                else {
                    res.status(404).json({ message: 'Examen no encontrado' });
                }
                return [2 /*return*/];
        }
    });
}); };
exports.getExamen = getExamen;
var createExamen = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var examen, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                examen = data_source_1.AppDataSource.getRepository(User_1.Examen).create(req.body);
                return [4 /*yield*/, data_source_1.AppDataSource.getRepository(User_1.Examen).save(examen)];
            case 1:
                result = _a.sent();
                res.json(result);
                return [2 /*return*/];
        }
    });
}); };
exports.createExamen = createExamen;
var updateExamen = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var examen, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_source_1.AppDataSource.getRepository(User_1.Examen).findOneBy({
                    ID: parseInt(req.params.id, 10),
                })];
            case 1:
                examen = _a.sent();
                if (!examen) return [3 /*break*/, 3];
                data_source_1.AppDataSource.getRepository(User_1.Examen).merge(examen, req.body);
                return [4 /*yield*/, data_source_1.AppDataSource.getRepository(User_1.Examen).save(examen)];
            case 2:
                result = _a.sent();
                res.json(result);
                return [3 /*break*/, 4];
            case 3:
                res.status(404).json({ message: 'Examen no encontrado' });
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateExamen = updateExamen;
var deleteExamen = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_source_1.AppDataSource.getRepository(User_1.Examen).delete(req.params.id)];
            case 1:
                result = _a.sent();
                res.json(result);
                return [2 /*return*/];
        }
    });
}); };
exports.deleteExamen = deleteExamen;
//# sourceMappingURL=examencontroller.js.map