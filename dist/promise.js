"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarElementoPorIDConPromesa = buscarElementoPorIDConPromesa;
function buscarElementoPorIDConPromesa(elementos, id) {
    return new Promise((resolve, reject) => {
        const resultado = elementos.find((elemento) => elemento.ID === id);
        if (resultado) {
            resolve(resultado); // Si encuentra el elemento, resuelve la promesa
        }
        else {
            reject(`No se encontró ningún elemento con ID ${id}`); // Si no lo encuentra, rechaza la promesa
        }
    });
}
