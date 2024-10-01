"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var data_source_1 = require("./data-source");
var examenroutes_1 = require("./routes/examenroutes");
var preguntaroutes_1 = require("./routes/preguntaroutes");
var insumoevaluacionroutes_1 = require("./routes/insumoevaluacionroutes");
var app = express();
app.use(express.json());
data_source_1.AppDataSource.initialize()
    .then(function () {
    console.log('Base de datos conectada');
})
    .catch(function (error) { return console.log('Error al conectar la base de datos:', error); });
// Rutas de la API
app.use('/api', examenroutes_1.default); // Rutas para Exámenes
app.use('/api', preguntaroutes_1.default); // Rutas para Preguntas
app.use('/api', insumoevaluacionroutes_1.default); // Rutas para Insumos de Evaluación
// Puerto en el que la aplicación estará escuchando
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Servidor corriendo en el puerto ".concat(PORT));
});
//# sourceMappingURL=app.js.map