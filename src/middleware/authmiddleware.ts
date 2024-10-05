import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado, token requerido' });
    }

    try {
        const decoded = jwt.verify(token, 'CSE211214');
        req.user = decoded;
        if (req.user.Estado !== 'Activo') {
            return res.status(403).json({ message: 'Usuario inactivo' });
        }
        next();
    } catch (error) {
        res.status(403).json({ message: 'Token no válido' });
    }
};
