import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { InsumoEvaluacion } from '../entity/User';

export const getInsumosEvaluacion = async (req: Request, res: Response) => {
    const insumosEvaluacion = await AppDataSource.getRepository(InsumoEvaluacion).find({
        relations: ['ID_Pregunta', 'ID_Examen'],
    });
    res.json(insumosEvaluacion);
};

export const getInsumoEvaluacion = async (req: Request, res: Response) => {
    const insumoEvaluacion = await AppDataSource.getRepository(InsumoEvaluacion).findOne({
        where: { ID: parseInt(req.params.id, 10) },
        relations: ['ID_Pregunta', 'ID_Examen'],
    });
    if (insumoEvaluacion) {
        res.json(insumoEvaluacion);
    } else {
        res.status(404).json({ message: 'Insumo de evaluación no encontrado' });
    }
};

export const createInsumoEvaluacion = async (req: Request, res: Response) => {
    const insumoEvaluacion = AppDataSource.getRepository(InsumoEvaluacion).create(req.body);
    const result = await AppDataSource.getRepository(InsumoEvaluacion).save(insumoEvaluacion);
    res.json(result);
};

export const updateInsumoEvaluacion = async (req: Request, res: Response) => {
    const insumoEvaluacion = await AppDataSource.getRepository(InsumoEvaluacion).findOneBy({
        ID: parseInt(req.params.id, 10),
    });
    if (insumoEvaluacion) {
        AppDataSource.getRepository(InsumoEvaluacion).merge(insumoEvaluacion, req.body);
        const result = await AppDataSource.getRepository(InsumoEvaluacion).save(insumoEvaluacion);
        res.json(result);
    } else {
        res.status(404).json({ message: 'Insumo de evaluación no encontrado' });
    }
};

export const deleteInsumoEvaluacion = async (req: Request, res: Response) => {
    const result = await AppDataSource.getRepository(InsumoEvaluacion).delete(req.params.id);
    res.json(result);
};
