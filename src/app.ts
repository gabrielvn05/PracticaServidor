import express from 'express';
import { AppDataSource } from './data-source';
import userRoutes from './routes/usuarioroutes';

const app = express();
app.use(express.json());

// Inicializa la base de datos y configura las rutas
AppDataSource.initialize()
    .then(() => {
        console.log('Base de datos conectada');

        app.use('/api/usuarios', userRoutes);

        // Puerto desde variable de entorno o por defecto en 3000
        const PORT = process.env.PORT || 3000;
        
        // Inicia el servidor en el puerto configurado
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });
    })
    .catch(error => {
        console.error('Error de conexión a la base de datos:', error);
    });

// Manejo de errores global para el servidor
app.use((err, req, res, next) => {
    console.error('Error en la aplicación:', err);
    res.status(500).json({ message: 'Error en la aplicación' });
});

export { app };
