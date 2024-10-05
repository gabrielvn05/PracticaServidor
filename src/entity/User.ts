import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import * as bcrypt from 'bcrypt';


@Entity()
export class Examen {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Descripcion: string;

    @OneToMany(() => InsumoEvaluacion, insumo => insumo.ID_Examen)
    insumosEvaluacion: InsumoEvaluacion[];
}

@Entity()
export class Pregunta {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Pregunta: string;

    @Column()
    Categoria: string;

    @Column()
    Respuesta_correcta: string;

    @OneToMany(() => InsumoEvaluacion, insumo => insumo.ID_Pregunta)
    insumosEvaluacion: InsumoEvaluacion[];
}

@Entity()
export class InsumoEvaluacion {
    @PrimaryGeneratedColumn()
    ID: number;

    @ManyToOne(() => Pregunta, pregunta => pregunta.insumosEvaluacion)
    ID_Pregunta: Pregunta;

    @ManyToOne(() => Examen, examen => examen.insumosEvaluacion)
    ID_Examen: Examen;

    @Column()
    Valor: number;
}

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Nombre: string;

    @Column()
    Clave: string;

    @Column()
    Estado: string;

    async hashPassword() {
        this.Clave = await bcrypt.hash(this.Clave, 10);
    }

    async checkPassword(Clave: string): Promise<boolean> {
        return await bcrypt.compare(Clave, this.Clave);
    }
}
