import { Request, Response } from 'express';
import { Usuario } from '../entity/User';
import { AppDataSource } from '../data-source';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Registro de usuario
export const register = async (req: Request, res: Response) => {
    try {
        const { Nombre, Clave, Estado } = req.body;

        // Validar los datos
        if (!Nombre || !Clave || !Estado) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        // Verificar si el usuario ya existe
        const existingUser = await AppDataSource.getRepository(Usuario).findOneBy({ Nombre });
        if (existingUser) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(Clave, 10);

        const usuario = new Usuario();
        usuario.Nombre = Nombre;
        usuario.Clave = hashedPassword;  // Guardar la clave hasheada
        usuario.Estado = Estado;

        // Guardar el usuario en la base de datos
        const result = await AppDataSource.getRepository(Usuario).save(usuario);
        console.log('Usuario registrado:', result);

        res.status(201).json({ message: 'Usuario registrado exitosamente', usuario: result });
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ message: 'Error al registrar usuario' });
    }
};

// Inicio de sesión
export const login = async (req: Request, res: Response) => {
    try {
        const { Nombre, Clave } = req.body;

        // Validar los datos
        if (!Nombre || !Clave) {
            return res.status(400).json({ message: 'Nombre y clave son obligatorios' });
        }

        // Buscar el usuario por nombre
        const usuario = await AppDataSource.getRepository(Usuario).findOneBy({ Nombre });
        if (!usuario) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        // Comparar la contraseña ingresada con la almacenada
        const isPasswordValid = await bcrypt.compare(Clave, usuario.Clave);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        // Verificar si el usuario está activo
        if (usuario.Estado !== 'Activo') {
            return res.status(403).json({ message: 'Usuario inactivo' });
        }

        // Generar el token JWT
        const token = jwt.sign(
            { ID: usuario.ID, Nombre: usuario.Nombre, Estado: usuario.Estado },
            process.env.JWT_SECRET || '211214CSE',  // Asegúrate de usar un valor seguro en entorno
            { expiresIn: '1h' }
        );

        res.json({ message: 'Inicio de sesión exitoso', token });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
};
