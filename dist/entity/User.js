"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsumoEvaluacion = exports.Pregunta = exports.Examen = void 0;
var typeorm_1 = require("typeorm");
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
//# sourceMappingURL=User.js.map