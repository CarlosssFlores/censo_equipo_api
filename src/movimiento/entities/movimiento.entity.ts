import { Equipo } from 'src/equipo/entities/equipo.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('movimientos')
export class Movimiento {
  @PrimaryGeneratedColumn()
  id_movimiento: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.movimiento)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @ManyToOne(() => Equipo, (equipo) => equipo.movimientos)
  @JoinColumn({ name: 'id_equipo' })
  equipo: Equipo;

  @Column({ name: 'fecha_movimiento' })
  fechaMovimiento: Date;

  @Column({ type: 'text', nullable: true })
  observaciones: string;
}
