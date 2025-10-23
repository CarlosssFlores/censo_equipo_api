import { Usuario } from 'src/usuarios/entities/usuario.entity';
<<<<<<< HEAD
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
=======
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
>>>>>>> 4134c487eba9ba2b35a160dbf82dec98af0a19f3

@Entity('movimientos')
export class Movimiento {
  @PrimaryGeneratedColumn()
  id_movimiento: number;

  @ManyToOne(() => Movimiento, (id_usuario) => id_usuario.id_usuario)
  id_usuario: Movimiento;

  @ManyToOne(() => Movimiento, (id_equipo) => id_equipo.id_equipo)
  id_equipo: Movimiento;

  @Column({ name: 'fecha_movimiento' })
  fechaMovimiento: Date;

  @Column({ type: 'text', nullable: true })
  observaciones: string;
}
