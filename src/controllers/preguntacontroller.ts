import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Pregunta } from '../entity/User'; 

export const getPreguntas = async (req: Request, res: Response) => {
    try {
        const preguntas = await AppDataSource.getRepository(Pregunta).find();
        res.json(preguntas);
    } catch (error) {
        console.error('Error al obtener las preguntas:', error);
        res.status(500).json({ message: 'Error al obtener las preguntas' });
    }
};

export const getPregunta = async (req: Request, res: Response) => {
    try {
        const pregunta = await AppDataSource.getRepository(Pregunta).findOneBy({
            ID: parseInt(req.params.id, 10),
        });
        if (pregunta) {
            res.json(pregunta);
        } else {
            res.status(404).json({ message: `Pregunta con ID ${req.params.id} no encontrada` });
        }
    } catch (error) {
        console.error('Error al obtener la pregunta:', error);
        res.status(500).json({ message: 'Error al obtener la pregunta' });
    }
};

export const createPregunta = async (req: Request, res: Response) => {
    try {
        const pregunta = AppDataSource.getRepository(Pregunta).create(req.body);
        const result = await AppDataSource.getRepository(Pregunta).save(pregunta);
        res.status(201).json(result);
    } catch (error) {
        console.error('Error al crear la pregunta:', error);
        res.status(500).json({ message: 'Error al crear la pregunta' });
    }
};

export const updatePregunta = async (req: Request, res: Response) => {
    try {
        const preguntaId = parseInt(req.params.id, 10);
        console.log(`Intentando actualizar la pregunta con ID: ${preguntaId}`);

        // Encuentra la pregunta por ID
        const pregunta = await AppDataSource.getRepository(Pregunta).findOneBy({
            ID: preguntaId,
        });

        if (pregunta) {
            console.log(`Pregunta encontrada:`, pregunta);
            
            // Actualizar los campos que se envían en el cuerpo de la solicitud
            const updatedPregunta = AppDataSource.getRepository(Pregunta).merge(pregunta, req.body);
            const result = await AppDataSource.getRepository(Pregunta).save(updatedPregunta);
            console.log(`Pregunta actualizada:`, result);
            res.json(result);
        } else {
            res.status(404).json({ message: `Pregunta con ID ${preguntaId} no encontrada` });
        }
    } catch (error) {
        console.error('Error al actualizar la pregunta:', error);
        res.status(500).json({ message: 'Error al actualizar la pregunta' });
    }
};



export const deletePregunta = async (req: Request, res: Response) => {
    try {
        const result = await AppDataSource.getRepository(Pregunta).delete(req.params.id);
        if (result.affected === 0) {
            return res.status(404).json({ message: 'Pregunta no encontrada para eliminar' });
        }
        res.json({ message: 'Pregunta eliminada con éxito' });
    } catch (error) {
        console.error('Error al eliminar la pregunta:', error);
        res.status(500).json({ message: 'Error al eliminar la pregunta' });
    }
};
