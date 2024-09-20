
import { InsumoEvaluacion } from './modelos';
import { buscarElementoPorID, buscarPorID } from './callback';
import { buscarElementoPorIDConPromesa } from './promise';
import { buscarElementoPorIDAsync } from './asyncAwait';
import { fetchData, IPost } from './restservi';

fetchData<IPost>('https://api.jsonbin.io/v3/b/66e272d7acd3cb34a8822375')
    .then((data: IPost[]) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

buscarElementoPorID(InsumoEvaluacion, 2, buscarPorID);

console.log("Usando forEach:");
InsumoEvaluacion.forEach((insumo) => {
    console.log(`ID de Insumo: ${insumo.ID}`);
    insumo.ID_Pregunta.forEach((pregunta) => {
        console.log(`Descripción Pregunta: ${pregunta.Pregunta}`);
    });
});

buscarElementoPorIDConPromesa(InsumoEvaluacion, 3)
    .then((resultado) => {
        console.log("Elemento encontrado con Promises:", resultado);
    })
    .catch((error) => {
        console.log(error);
    });

async function ejecutarBusqueda() {
    try {
        const resultado = await buscarElementoPorIDAsync(InsumoEvaluacion, 3);
        console.log("Elemento encontrado con async/await:", resultado);
    } catch (error) {
        console.log(error);
    }
}

ejecutarBusqueda();