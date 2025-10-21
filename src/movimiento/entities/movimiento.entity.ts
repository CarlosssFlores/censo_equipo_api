import { Equipo } from 'src/equipo/entities/equipo.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('movimientos')
export class Movimiento {
  @PrimaryGeneratedColumn()
  id_movimiento: number;
  @CreateDateColumn({ name: 'fecha_movimiento' })
  fechaMovimiento: Date;

  @Column({ type: 'text', nullable: true })
  observaciones: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.movimiento)
  usuario: Usuario;

  @ManyToOne(() => Equipo, (equipo) => equipo.movimiento)
  equipo: Equipo;
}
