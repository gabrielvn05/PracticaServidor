import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Examen } from '../entity/User';

export const getExamenes = async (req: Request, res: Response) => {
    const examenes = await AppDataSource.getRepository(Examen).find();
    res.json(examenes);
};

export const getExamen = async (req: Request, res: Response) => {
    const examen = await AppDataSource.getRepository(Examen).findOneBy({
        ID: parseInt(req.params.id, 10),
    });
    if (examen) {
        res.json(examen);
    } else {
        res.status(404).json({ message: 'Examen no encontrado' });
    }
};

export const createExamen = async (req: Request, res: Response) => {
    const examen = AppDataSource.getRepository(Examen).create(req.body);
    const result = await AppDataSource.getRepository(Examen).save(examen);
    res.json(result);
};

export const updateExamen = async (req: Request, res: Response) => {
    const examen = await AppDataSource.getRepository(Examen).findOneBy({
        ID: parseInt(req.params.id, 10),
    });
    if (examen) {
        AppDataSource.getRepository(Examen).merge(examen, req.body);
        const result = await AppDataSource.getRepository(Examen).save(examen);
        res.json(result);
    } else {
        res.status(404).json({ message: 'Examen no encontrado' });
    }
};

export const deleteExamen = async (req: Request, res: Response) => {
    const result = await AppDataSource.getRepository(Examen).delete(req.params.id);
    res.json(result);
};
