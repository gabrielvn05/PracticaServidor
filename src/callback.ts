import { IInsumoEvaluacion } from './modelos';

export function buscarElementoPorID(
    elementos: IInsumoEvaluacion[], 
    id: number, 
    callback: (elementos: IInsumoEvaluacion[], id: number) => IInsumoEvaluacion | undefined
) {
    const resultado = callback(elementos, id);
    if (resultado) {
        console.log("Elemento encontrado:", resultado);
    } else {
        console.log(`No se encontró ningún elemento con ID ${id}`);
    }
}

export const buscarPorID = (elementos: IInsumoEvaluacion[], id: number): IInsumoEvaluacion | undefined => {
    return elementos.find((elemento) => elemento.ID === id);
};
