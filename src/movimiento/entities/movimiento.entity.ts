import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

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
