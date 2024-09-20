import { IInsumoEvaluacion } from './modelos';

export function buscarElementoPorIDConPromesa(
    elementos: IInsumoEvaluacion[], 
    id: number
): Promise<IInsumoEvaluacion> {
    return new Promise((resolve, reject) => {
        const resultado = elementos.find((elemento) => elemento.ID === id);
        if (resultado) {
            resolve(resultado);
        } else {
            reject(`No se encontró ningún elemento con ID ${id}`);
        }
    });
}