"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var data_source_1 = require("./data-source");
var usuarioroutes_1 = __importDefault(require("./routes/usuarioroutes"));
var app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
// Inicializa la base de datos y configura las rutas
data_source_1.AppDataSource.initialize()
    .then(function () {
    console.log('Base de datos conectada');
    app.use('/api/usuarios', usuarioroutes_1.default);
    // Puerto desde variable de entorno o por defecto en 3000
    var PORT = process.env.PORT || 3000;
    // Inicia el servidor en el puerto configurado
    app.listen(PORT, function () {
        console.log("Servidor corriendo en el puerto ".concat(PORT));
    });
})
    .catch(function (error) {
    console.error('Error de conexión a la base de datos:', error);
});
// Manejo de errores global para el servidor
app.use(function (err, req, res, next) {
    console.error('Error en la aplicación:', err);
    res.status(500).json({ message: 'Error en la aplicación' });
});
//# sourceMappingURL=app.js.map