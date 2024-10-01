"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarElementoPorIDConPromesa = buscarElementoPorIDConPromesa;
function buscarElementoPorIDConPromesa(elementos, id) {
    return new Promise(function (resolve, reject) {
        var resultado = elementos.find(function (elemento) { return elemento.ID === id; });
        if (resultado) {
            resolve(resultado);
        }
        else {
            reject("No se encontr\u00F3 ning\u00FAn elemento con ID ".concat(id));
        }
    });
}
//# sourceMappingURL=promise.js.map