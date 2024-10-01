"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarPorID = void 0;
exports.buscarElementoPorID = buscarElementoPorID;
function buscarElementoPorID(elementos, id, callback) {
    var resultado = callback(elementos, id);
    if (resultado) {
        console.log("Elemento encontrado:", resultado);
    }
    else {
        console.log("No se encontr\u00F3 ning\u00FAn elemento con ID ".concat(id));
    }
}
var buscarPorID = function (elementos, id) {
    return elementos.find(function (elemento) { return elemento.ID === id; });
};
exports.buscarPorID = buscarPorID;
//# sourceMappingURL=callback.js.map