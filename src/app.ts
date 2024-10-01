import * as express from 'express';
import { AppDataSource } from './data-source';
import examenRoutes from './routes/examenroutes';
import preguntaRoutes from './routes/preguntaroutes';
import insumoEvaluacionRoutes from './routes/insumoevaluacionroutes';

const app = express();
app.use(express.json());

AppDataSource.initialize()
    .then(() => {
        console.log('Base de datos conectada');
    })
    .catch((error) => console.log('Error al conectar la base de datos:', error));

app.use('/api', examenRoutes); 
app.use('/api', preguntaRoutes);
app.use('/api', insumoEvaluacionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
