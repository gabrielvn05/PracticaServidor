import { AppDataSource } from "./data-source";
import { Examen, Pregunta, InsumoEvaluacion } from "./entity/User";
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function crearExamen(descripcion: string) {
    const examen = new Examen();
    examen.Descripcion = descripcion;
    
    await AppDataSource.manager.save(examen);
    console.log("Examen guardado con ID: " + examen.ID);
}

async function crearPregunta(descripcion: string, categoria: string, respuestaCorrecta: string) {
    const pregunta = new Pregunta();
    pregunta.Pregunta = descripcion;
    pregunta.Categoria = categoria;
    pregunta.Respuesta_correcta = respuestaCorrecta;

    await AppDataSource.manager.save(pregunta);
    console.log("Pregunta guardada con ID: " + pregunta.ID);
}

async function crearInsumoEvaluacion(examenId: number, preguntaId: number, valor: number) {
    const examen = await AppDataSource.manager.findOneBy(Examen, { ID: examenId });
    const pregunta = await AppDataSource.manager.findOneBy(Pregunta, { ID: preguntaId });
    
    if (examen && pregunta) {
        const insumoEvaluacion = new InsumoEvaluacion();
        insumoEvaluacion.ID_Examen = examen;
        insumoEvaluacion.ID_Pregunta = pregunta;
        insumoEvaluacion.Valor = valor;

        await AppDataSource.manager.save(insumoEvaluacion);
        console.log("Insumo de evaluación guardado con ID: " + insumoEvaluacion.ID);
    } else {
        console.log("Examen o pregunta no encontrados.");
    }
}

async function consultarExamenes() {
    const examenes = await AppDataSource.manager.find(Examen);
    console.log("Exámenes cargados: ", examenes);
}

async function consultarPreguntas() {
    const preguntas = await AppDataSource.manager.find(Pregunta);
    console.log("Preguntas cargadas: ", preguntas);
}

async function consultarInsumosEvaluacion() {
    const insumosEvaluacion = await AppDataSource.manager.find(InsumoEvaluacion);
    console.log("Insumos de evaluación cargados: ", insumosEvaluacion);
}

async function modificarExamen(id: number, nuevaDescripcion: string) {
    const examen = await AppDataSource.manager.findOneBy(Examen, { ID: id });
    
    if (examen) {
        examen.Descripcion = nuevaDescripcion;
        await AppDataSource.manager.save(examen);
        console.log("Examen modificado con ID: " + examen.ID);
    } else {
        console.log("Examen no encontrado con ID: " + id);
    }
}

async function modificarPregunta(id: number, nuevaDescripcion: string, nuevaCategoria: string, nuevaRespuestaCorrecta: string) {
    const pregunta = await AppDataSource.manager.findOneBy(Pregunta, { ID: id });
    
    if (pregunta) {
        pregunta.Pregunta = nuevaDescripcion;
        pregunta.Categoria = nuevaCategoria;
        pregunta.Respuesta_correcta = nuevaRespuestaCorrecta;
        await AppDataSource.manager.save(pregunta);
        console.log("Pregunta modificada con ID: " + pregunta.ID);
    } else {
        console.log("Pregunta no encontrada con ID: " + id);
    }
}

async function modificarInsumoEvaluacion(id: number, nuevoValor: number) {
    const insumoEvaluacion = await AppDataSource.manager.findOneBy(InsumoEvaluacion, { ID: id });
    
    if (insumoEvaluacion) {
        insumoEvaluacion.Valor = nuevoValor;
        await AppDataSource.manager.save(insumoEvaluacion);
        console.log("Insumo de evaluación modificado con ID: " + insumoEvaluacion.ID);
    } else {
        console.log("Insumo de evaluación no encontrado con ID: " + id);
    }
}

async function eliminarExamen(id: number) {
    const examen = await AppDataSource.manager.findOneBy(Examen, { ID: id });
    
    if (examen) {
        await AppDataSource.manager.delete(InsumoEvaluacion, { ID_Examen: examen });
        await AppDataSource.manager.remove(examen);
        console.log("Examen eliminado con ID: " + id);
    } else {
        console.log("Examen no encontrado con ID: " + id);
    }
}

async function eliminarPregunta(id: number) {
    const pregunta = await AppDataSource.manager.findOneBy(Pregunta, { ID: id });
    
    if (pregunta) {
        await AppDataSource.manager.remove(pregunta);
        console.log("Pregunta eliminada con ID: " + id);
    } else {
        console.log("Pregunta no encontrada con ID: " + id);
    }
}

async function eliminarInsumoEvaluacion(id: number) {
    const insumoEvaluacion = await AppDataSource.manager.findOneBy(InsumoEvaluacion, { ID: id });
    
    if (insumoEvaluacion) {
        await AppDataSource.manager.remove(insumoEvaluacion);
        console.log("Insumo de evaluación eliminado con ID: " + id);
    } else {
        console.log("Insumo de evaluación no encontrado con ID: " + id);
    }
}

function mostrarMenu() {
    console.log(`
    Elige una opción:
    1. Crear examen
    2. Crear pregunta
    3. Crear insumo de evaluación
    4. Consultar exámenes
    5. Consultar preguntas
    6. Consultar insumos de evaluación
    7. Modificar examen
    8. Modificar pregunta
    9. Modificar insumo de evaluación
    10. Eliminar examen
    11. Eliminar pregunta
    12. Eliminar insumo de evaluación
    0. Salir
    `);
}

async function ejecutarMenu() {
    mostrarMenu();

    rl.question("Selecciona una opción: ", async (opcion: string) => {
        switch (opcion) {
            case '1':
                rl.question("Descripción del examen: ", async (descripcion) => {
                    await crearExamen(descripcion);
                    ejecutarMenu();
                });
                break;
            case '2':
                rl.question("Descripción de la pregunta: ", (descripcion) => {
                    rl.question("Categoría: ", (categoria) => {
                        rl.question("Respuesta correcta: ", async (respuesta) => {
                            await crearPregunta(descripcion, categoria, respuesta);
                            ejecutarMenu();
                        });
                    });
                });
                break;
            case '3':
                rl.question("ID del examen: ", (examenId) => {
                    rl.question("ID de la pregunta: ", (preguntaId) => {
                        rl.question("Valor del insumo: ", async (valor) => {
                            await crearInsumoEvaluacion(Number(examenId), Number(preguntaId), Number(valor));
                            ejecutarMenu();
                        });
                    });
                });
                break;
            case '4':
                await consultarExamenes();
                ejecutarMenu();
                break;
            case '5':
                await consultarPreguntas();
                ejecutarMenu();
                break;
            case '6':
                await consultarInsumosEvaluacion();
                ejecutarMenu();
                break;
            case '7':
                rl.question("ID del examen a modificar: ", (id) => {
                    rl.question("Nueva descripción: ", async (nuevaDescripcion) => {
                        await modificarExamen(Number(id), nuevaDescripcion);
                        ejecutarMenu();
                    });
                });
                break;
            case '8':
                rl.question("ID de la pregunta a modificar: ", (id) => {
                    rl.question("Nueva descripción: ", (nuevaDescripcion) => {
                        rl.question("Nueva categoría: ", (nuevaCategoria) => {
                            rl.question("Nueva respuesta correcta: ", async (nuevaRespuestaCorrecta) => {
                                await modificarPregunta(Number(id), nuevaDescripcion, nuevaCategoria, nuevaRespuestaCorrecta);
                                ejecutarMenu();
                            });
                        });
                    });
                });
                break;
            case '9':
                rl.question("ID del insumo a modificar: ", (id) => {
                    rl.question("Nuevo valor: ", async (nuevoValor) => {
                        await modificarInsumoEvaluacion(Number(id), Number(nuevoValor));
                        ejecutarMenu();
                    });
                });
                break;
            case '10':
                rl.question("ID del examen a eliminar: ", async (id) => {
                    await eliminarExamen(Number(id));
                    ejecutarMenu();
                });
                break;
            case '11':
                rl.question("ID de la pregunta a eliminar: ", async (id) => {
                    await eliminarPregunta(Number(id));
                    ejecutarMenu();
                });
                break;
            case '12':
                rl.question("ID del insumo a eliminar: ", async (id) => {
                    await eliminarInsumoEvaluacion(Number(id));
                    ejecutarMenu();
                });
                break;
            case '0':
                rl.close();
                break;
            default:
                console.log("Opción no válida.");
                ejecutarMenu();
        }
    });
}

AppDataSource.initialize().then(() => {
    ejecutarMenu();
}).catch(error => console.log(error));
