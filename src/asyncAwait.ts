import { IInsumoEvaluacion } from './modelos';
import { buscarElementoPorIDConPromesa } from './promise';

export async function buscarElementoPorIDAsync(
    elementos: IInsumoEvaluacion[], 
    id: number
): Promise<IInsumoEvaluacion> {
    const resultado = await buscarElementoPorIDConPromesa(elementos, id);
    return resultado;
}