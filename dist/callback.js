"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarPorID = void 0;
exports.buscarElementoPorID = buscarElementoPorID;
function buscarElementoPorID(elementos, id, callback) {
    const resultado = callback(elementos, id);
    if (resultado) {
        console.log("Elemento encontrado:", resultado);
    }
    else {
        console.log(`No se encontró ningún elemento con ID ${id}`);
    }
}
const buscarPorID = (elementos, id) => {
    return elementos.find((elemento) => elemento.ID === id);
};
exports.buscarPorID = buscarPorID;
