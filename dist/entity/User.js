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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = exports.InsumoEvaluacion = exports.Pregunta = exports.Examen = void 0;
var typeorm_1 = require("typeorm");
var bcrypt = __importStar(require("bcrypt"));
var Examen = /** @class */ (function () {
    function Examen() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Examen.prototype, "ID", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Examen.prototype, "Descripcion", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return InsumoEvaluacion; }, function (insumo) { return insumo.ID_Examen; }),
        __metadata("design:type", Array)
    ], Examen.prototype, "insumosEvaluacion", void 0);
    Examen = __decorate([
        (0, typeorm_1.Entity)()
    ], Examen);
    return Examen;
}());
exports.Examen = Examen;
var Pregunta = /** @class */ (function () {
    function Pregunta() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Pregunta.prototype, "ID", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Pregunta.prototype, "Pregunta", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Pregunta.prototype, "Categoria", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Pregunta.prototype, "Respuesta_correcta", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return InsumoEvaluacion; }, function (insumo) { return insumo.ID_Pregunta; }),
        __metadata("design:type", Array)
    ], Pregunta.prototype, "insumosEvaluacion", void 0);
    Pregunta = __decorate([
        (0, typeorm_1.Entity)()
    ], Pregunta);
    return Pregunta;
}());
exports.Pregunta = Pregunta;
var InsumoEvaluacion = /** @class */ (function () {
    function InsumoEvaluacion() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], InsumoEvaluacion.prototype, "ID", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Pregunta; }, function (pregunta) { return pregunta.insumosEvaluacion; }),
        __metadata("design:type", Pregunta)
    ], InsumoEvaluacion.prototype, "ID_Pregunta", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Examen; }, function (examen) { return examen.insumosEvaluacion; }),
        __metadata("design:type", Examen)
    ], InsumoEvaluacion.prototype, "ID_Examen", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], InsumoEvaluacion.prototype, "Valor", void 0);
    InsumoEvaluacion = __decorate([
        (0, typeorm_1.Entity)()
    ], InsumoEvaluacion);
    return InsumoEvaluacion;
}());
exports.InsumoEvaluacion = InsumoEvaluacion;
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    Usuario.prototype.hashPassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, bcrypt.hash(this.Clave, 10)];
                    case 1:
                        _a.Clave = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Usuario.prototype.checkPassword = function (Clave) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bcrypt.compare(Clave, this.Clave)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Usuario.prototype, "ID", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Usuario.prototype, "Nombre", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Usuario.prototype, "Clave", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Usuario.prototype, "Estado", void 0);
    Usuario = __decorate([
        (0, typeorm_1.Entity)()
    ], Usuario);
    return Usuario;
}());
exports.Usuario = Usuario;
//# sourceMappingURL=User.js.map