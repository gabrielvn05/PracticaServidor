interface IExamen{
    ID: number,
    Descripcion: string,
}

interface IPregunta{
    ID: number,
    Pregunta: string ;
    Categoria: string;
    Respuesta_correcta: string,
}

interface IInsumoEvaluacion {
    ID: number,
    ID_Pregunta: IPregunta[],
    ID_Examen: IExamen[],
    Valor: number,
}

const InsumoEvaluacion : IInsumoEvaluacion[]=[
    {
    ID:1,
    ID_Pregunta: [{
        ID: 1,
        Pregunta: "Indique cual de las siguientes preguntas es la correcta",
        Categoria: "Seleccion",
        Respuesta_correcta: "C",
    }],
    ID_Examen: [{
        ID: 1,
        Descripcion: "Pregunta 1",
    }],
    Valor: 2
},
{
    ID:2,
    ID_Pregunta: [{
        ID: 2,
        Pregunta: "Indique cual de las siguientes afirmaciones son las correctas",
        Categoria: "Seleccion multiple",
        Respuesta_correcta: "A,D",
    }],
    ID_Examen: [{
        ID: 2,
        Descripcion: "Pregunta 2",
    }],
    Valor: 2
},
{
    ID:3,
    ID_Pregunta: [{
        ID: 3,
        Pregunta: "Indique cual de las siguientes afirmaciones NO es la correcta",
        Categoria: "Seleccion",
        Respuesta_correcta: "B",
    }],
    ID_Examen: [{
        ID: 3,
        Descripcion: "Pregunta 3",
    }],
    Valor: 2
},
{
    ID:4,
    ID_Pregunta: [{
        ID: 4,
        Pregunta: "Indique cual de las siguientes negaciones es la incorrecta",
        Categoria: "Seleccion",
        Respuesta_correcta: "D",
    }],
    ID_Examen: [{
        ID: 4,
        Descripcion: "Pregunta 4",
    }],
    Valor: 2
},
{
    ID:5,
    ID_Pregunta: [{
        ID: 5,
        Pregunta: "Indique cual de las siguientes afirmaciones es la correcta",
        Categoria: "Seleccion",
        Respuesta_correcta: "C",
    }],
    ID_Examen: [{
        ID: 5,
        Descripcion: "Pregunta 5",
    }],
    Valor: 2
}]

export {
    IExamen,
    IPregunta,
    IInsumoEvaluacion,
    InsumoEvaluacion
}



