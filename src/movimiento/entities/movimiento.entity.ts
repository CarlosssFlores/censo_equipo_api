import { Equipo } from 'src/equipo/entities/equipo.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('movimientos')
export class Movimiento {
  @PrimaryGeneratedColumn()
  id_movimiento: number;

  @ManyToOne(() => Usuario, (user) => user.movimiento)
  user: Usuario;

  @ManyToOne(() => Equipo, (equipo) => equipo.mov)
  equipo: Equipo;

  @Column({ name: 'fecha_movimiento' })
  fechaMovimiento: Date;

  @Column({ type: 'text', nullable: true })
  observaciones: string;
}
