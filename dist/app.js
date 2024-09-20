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
Object.defineProperty(exports, "__esModule", { value: true });
const modelos_1 = require("./modelos");
const callback_1 = require("./callback");
const promise_1 = require("./promise");
const asyncAwait_1 = require("./asyncAwait");
const restservi_1 = require("./restservi");
(0, restservi_1.fetchData)('https://api.jsonbin.io/v3/b/66e272d7acd3cb34a8822375')
    .then((data) => {
    console.log(data);
})
    .catch((error) => {
    console.log(error);
});
(0, callback_1.buscarElementoPorID)(modelos_1.InsumoEvaluacion, 2, callback_1.buscarPorID);
console.log("Usando forEach:");
modelos_1.InsumoEvaluacion.forEach((insumo) => {
    console.log(`ID de Insumo: ${insumo.ID}`);
    insumo.ID_Pregunta.forEach((pregunta) => {
        console.log(`Descripción Pregunta: ${pregunta.Descripcion}`);
    });
});
(0, promise_1.buscarElementoPorIDConPromesa)(modelos_1.InsumoEvaluacion, 3)
    .then((resultado) => {
    console.log("Elemento encontrado con Promises:", resultado);
})
    .catch((error) => {
    console.log(error);
});
function ejecutarBusqueda() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resultado = yield (0, asyncAwait_1.buscarElementoPorIDAsync)(modelos_1.InsumoEvaluacion, 3);
            console.log("Elemento encontrado con async/await:", resultado);
        }
        catch (error) {
            console.log(error);
        }
    });
}
ejecutarBusqueda();
