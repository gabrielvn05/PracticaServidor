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
var data_source_1 = require("./data-source");
var User_1 = require("./entity/User");
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function crearExamen(descripcion) {
    return __awaiter(this, void 0, void 0, function () {
        var examen;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    examen = new User_1.Examen();
                    examen.Descripcion = descripcion;
                    return [4 /*yield*/, data_source_1.AppDataSource.manager.save(examen)];
                case 1:
                    _a.sent();
                    console.log("Examen guardado con ID: " + examen.ID);
                    return [2 /*return*/];
            }
        });
    });
}
function crearPregunta(descripcion, categoria, respuestaCorrecta) {
    return __awaiter(this, void 0, void 0, function () {
        var pregunta;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pregunta = new User_1.Pregunta();
                    pregunta.Pregunta = descripcion;
                    pregunta.Categoria = categoria;
                    pregunta.Respuesta_correcta = respuestaCorrecta;
                    return [4 /*yield*/, data_source_1.AppDataSource.manager.save(pregunta)];
                case 1:
                    _a.sent();
                    console.log("Pregunta guardada con ID: " + pregunta.ID);
                    return [2 /*return*/];
            }
        });
    });
}
function crearInsumoEvaluacion(examenId, preguntaId, valor) {
    return __awaiter(this, void 0, void 0, function () {
        var examen, pregunta, insumoEvaluacion;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, data_source_1.AppDataSource.manager.findOneBy(User_1.Examen, { ID: examenId })];
                case 1:
                    examen = _a.sent();
                    return [4 /*yield*/, data_source_1.AppDataSource.manager.findOneBy(User_1.Pregunta, { ID: preguntaId })];
                case 2:
                    pregunta = _a.sent();
                    if (!(examen && pregunta)) return [3 /*break*/, 4];
                    insumoEvaluacion = new User_1.InsumoEvaluacion();
                    insumoEvaluacion.ID_Examen = examen;
                    insumoEvaluacion.ID_Pregunta = pregunta;
                    insumoEvaluacion.Valor = valor;
                    return [4 /*yield*/, data_source_1.AppDataSource.manager.save(insumoEvaluacion)];
                case 3:
                    _a.sent();
                    console.log("Insumo de evaluación guardado con ID: " + insumoEvaluacion.ID);
                    return [3 /*break*/, 5];
                case 4:
                    console.log("Examen o pregunta no encontrados.");
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    });
}
function consultarExamenes() {
    return __awaiter(this, void 0, void 0, function () {
        var examenes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, data_source_1.AppDataSource.manager.find(User_1.Examen)];
                case 1:
                    examenes = _a.sent();
                    console.log("Exámenes cargados: ", examenes);
                    return [2 /*return*/];
            }
        });
    });
}
function consultarPreguntas() {
    return __awaiter(this, void 0, void 0, function () {
        var preguntas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, data_source_1.AppDataSource.manager.find(User_1.Pregunta)];
                case 1:
                    preguntas = _a.sent();
                    console.log("Preguntas cargadas: ", preguntas);
                    return [2 /*return*/];
            }
        });
    });
}
function consultarInsumosEvaluacion() {
    return __awaiter(this, void 0, void 0, function () {
        var insumosEvaluacion;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, data_source_1.AppDataSource.manager.find(User_1.InsumoEvaluacion)];
                case 1:
                    insumosEvaluacion = _a.sent();
                    console.log("Insumos de evaluación cargados: ", insumosEvaluacion);
                    return [2 /*return*/];
            }
        });
    });
}
function modificarExamen(id, nuevaDescripcion) {
    return __awaiter(this, void 0, void 0, function () {
        var examen;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, data_source_1.AppDataSource.manager.findOneBy(User_1.Examen, { ID: id })];
                case 1:
                    examen = _a.sent();
                    if (!examen) return [3 /*break*/, 3];
                    examen.Descripcion = nuevaDescripcion;
                    return [4 /*yield*/, data_source_1.AppDataSource.manager.save(examen)];
                case 2:
                    _a.sent();
                    console.log("Examen modificado con ID: " + examen.ID);
                    return [3 /*break*/, 4];
                case 3:
                    console.log("Examen no encontrado con ID: " + id);
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function modificarPregunta(id, nuevaDescripcion, nuevaCategoria, nuevaRespuestaCorrecta) {
    return __awaiter(this, void 0, void 0, function () {
        var pregunta;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, data_source_1.AppDataSource.manager.findOneBy(User_1.Pregunta, { ID: id })];
                case 1:
                    pregunta = _a.sent();
                    if (!pregunta) return [3 /*break*/, 3];
                    pregunta.Pregunta = nuevaDescripcion;
                    pregunta.Categoria = nuevaCategoria;
                    pregunta.Respuesta_correcta = nuevaRespuestaCorrecta;
                    return [4 /*yield*/, data_source_1.AppDataSource.manager.save(pregunta)];
                case 2:
                    _a.sent();
                    console.log("Pregunta modificada con ID: " + pregunta.ID);
                    return [3 /*break*/, 4];
                case 3:
                    console.log("Pregunta no encontrada con ID: " + id);
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function modificarInsumoEvaluacion(id, nuevoValor) {
    return __awaiter(this, void 0, void 0, function () {
        var insumoEvaluacion;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, data_source_1.AppDataSource.manager.findOneBy(User_1.InsumoEvaluacion, { ID: id })];
                case 1:
                    insumoEvaluacion = _a.sent();
                    if (!insumoEvaluacion) return [3 /*break*/, 3];
                    insumoEvaluacion.Valor = nuevoValor;
                    return [4 /*yield*/, data_source_1.AppDataSource.manager.save(insumoEvaluacion)];
                case 2:
                    _a.sent();
                    console.log("Insumo de evaluación modificado con ID: " + insumoEvaluacion.ID);
                    return [3 /*break*/, 4];
                case 3:
                    console.log("Insumo de evaluación no encontrado con ID: " + id);
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function eliminarExamen(id) {
    return __awaiter(this, void 0, void 0, function () {
        var examen;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, data_source_1.AppDataSource.manager.findOneBy(User_1.Examen, { ID: id })];
                case 1:
                    examen = _a.sent();
                    if (!examen) return [3 /*break*/, 4];
                    return [4 /*yield*/, data_source_1.AppDataSource.manager.delete(User_1.InsumoEvaluacion, { ID_Examen: examen })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, data_source_1.AppDataSource.manager.remove(examen)];
                case 3:
                    _a.sent();
                    console.log("Examen eliminado con ID: " + id);
                    return [3 /*break*/, 5];
                case 4:
                    console.log("Examen no encontrado con ID: " + id);
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    });
}
function eliminarPregunta(id) {
    return __awaiter(this, void 0, void 0, function () {
        var pregunta;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, data_source_1.AppDataSource.manager.findOneBy(User_1.Pregunta, { ID: id })];
                case 1:
                    pregunta = _a.sent();
                    if (!pregunta) return [3 /*break*/, 3];
                    return [4 /*yield*/, data_source_1.AppDataSource.manager.remove(pregunta)];
                case 2:
                    _a.sent();
                    console.log("Pregunta eliminada con ID: " + id);
                    return [3 /*break*/, 4];
                case 3:
                    console.log("Pregunta no encontrada con ID: " + id);
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function eliminarInsumoEvaluacion(id) {
    return __awaiter(this, void 0, void 0, function () {
        var insumoEvaluacion;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, data_source_1.AppDataSource.manager.findOneBy(User_1.InsumoEvaluacion, { ID: id })];
                case 1:
                    insumoEvaluacion = _a.sent();
                    if (!insumoEvaluacion) return [3 /*break*/, 3];
                    return [4 /*yield*/, data_source_1.AppDataSource.manager.remove(insumoEvaluacion)];
                case 2:
                    _a.sent();
                    console.log("Insumo de evaluación eliminado con ID: " + id);
                    return [3 /*break*/, 4];
                case 3:
                    console.log("Insumo de evaluación no encontrado con ID: " + id);
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function mostrarMenu() {
    console.log("\n    Elige una opci\u00F3n:\n    1. Crear examen\n    2. Crear pregunta\n    3. Crear insumo de evaluaci\u00F3n\n    4. Consultar ex\u00E1menes\n    5. Consultar preguntas\n    6. Consultar insumos de evaluaci\u00F3n\n    7. Modificar examen\n    8. Modificar pregunta\n    9. Modificar insumo de evaluaci\u00F3n\n    10. Eliminar examen\n    11. Eliminar pregunta\n    12. Eliminar insumo de evaluaci\u00F3n\n    0. Salir\n    ");
}
function ejecutarMenu() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            mostrarMenu();
            rl.question("Selecciona una opción: ", function (opcion) { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = opcion;
                            switch (_a) {
                                case '1': return [3 /*break*/, 1];
                                case '2': return [3 /*break*/, 2];
                                case '3': return [3 /*break*/, 3];
                                case '4': return [3 /*break*/, 4];
                                case '5': return [3 /*break*/, 6];
                                case '6': return [3 /*break*/, 8];
                                case '7': return [3 /*break*/, 10];
                                case '8': return [3 /*break*/, 11];
                                case '9': return [3 /*break*/, 12];
                                case '10': return [3 /*break*/, 13];
                                case '11': return [3 /*break*/, 14];
                                case '12': return [3 /*break*/, 15];
                                case '0': return [3 /*break*/, 16];
                            }
                            return [3 /*break*/, 17];
                        case 1:
                            rl.question("Descripción del examen: ", function (descripcion) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, crearExamen(descripcion)];
                                        case 1:
                                            _a.sent();
                                            ejecutarMenu();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [3 /*break*/, 18];
                        case 2:
                            rl.question("Descripción de la pregunta: ", function (descripcion) {
                                rl.question("Categoría: ", function (categoria) {
                                    rl.question("Respuesta correcta: ", function (respuesta) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, crearPregunta(descripcion, categoria, respuesta)];
                                                case 1:
                                                    _a.sent();
                                                    ejecutarMenu();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                });
                            });
                            return [3 /*break*/, 18];
                        case 3:
                            rl.question("ID del examen: ", function (examenId) {
                                rl.question("ID de la pregunta: ", function (preguntaId) {
                                    rl.question("Valor del insumo: ", function (valor) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, crearInsumoEvaluacion(Number(examenId), Number(preguntaId), Number(valor))];
                                                case 1:
                                                    _a.sent();
                                                    ejecutarMenu();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                });
                            });
                            return [3 /*break*/, 18];
                        case 4: return [4 /*yield*/, consultarExamenes()];
                        case 5:
                            _b.sent();
                            ejecutarMenu();
                            return [3 /*break*/, 18];
                        case 6: return [4 /*yield*/, consultarPreguntas()];
                        case 7:
                            _b.sent();
                            ejecutarMenu();
                            return [3 /*break*/, 18];
                        case 8: return [4 /*yield*/, consultarInsumosEvaluacion()];
                        case 9:
                            _b.sent();
                            ejecutarMenu();
                            return [3 /*break*/, 18];
                        case 10:
                            rl.question("ID del examen a modificar: ", function (id) {
                                rl.question("Nueva descripción: ", function (nuevaDescripcion) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, modificarExamen(Number(id), nuevaDescripcion)];
                                            case 1:
                                                _a.sent();
                                                ejecutarMenu();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                            });
                            return [3 /*break*/, 18];
                        case 11:
                            rl.question("ID de la pregunta a modificar: ", function (id) {
                                rl.question("Nueva descripción: ", function (nuevaDescripcion) {
                                    rl.question("Nueva categoría: ", function (nuevaCategoria) {
                                        rl.question("Nueva respuesta correcta: ", function (nuevaRespuestaCorrecta) { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, modificarPregunta(Number(id), nuevaDescripcion, nuevaCategoria, nuevaRespuestaCorrecta)];
                                                    case 1:
                                                        _a.sent();
                                                        ejecutarMenu();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); });
                                    });
                                });
                            });
                            return [3 /*break*/, 18];
                        case 12:
                            rl.question("ID del insumo a modificar: ", function (id) {
                                rl.question("Nuevo valor: ", function (nuevoValor) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, modificarInsumoEvaluacion(Number(id), Number(nuevoValor))];
                                            case 1:
                                                _a.sent();
                                                ejecutarMenu();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                            });
                            return [3 /*break*/, 18];
                        case 13:
                            rl.question("ID del examen a eliminar: ", function (id) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, eliminarExamen(Number(id))];
                                        case 1:
                                            _a.sent();
                                            ejecutarMenu();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [3 /*break*/, 18];
                        case 14:
                            rl.question("ID de la pregunta a eliminar: ", function (id) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, eliminarPregunta(Number(id))];
                                        case 1:
                                            _a.sent();
                                            ejecutarMenu();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [3 /*break*/, 18];
                        case 15:
                            rl.question("ID del insumo a eliminar: ", function (id) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, eliminarInsumoEvaluacion(Number(id))];
                                        case 1:
                                            _a.sent();
                                            ejecutarMenu();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [3 /*break*/, 18];
                        case 16:
                            rl.close();
                            return [3 /*break*/, 18];
                        case 17:
                            console.log("Opción no válida.");
                            ejecutarMenu();
                            _b.label = 18;
                        case 18: return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    });
}
data_source_1.AppDataSource.initialize().then(function () {
    ejecutarMenu();
}).catch(function (error) { return console.log(error); });
//# sourceMappingURL=index.js.map