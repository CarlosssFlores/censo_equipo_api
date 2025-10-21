import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Adscripcion, Estado, Marca, Procesador, SistemaOperativo, TipoEquipo, Uso } from './catalogo.entities';



@Entity()
export class Equipo {
  @PrimaryGeneratedColumn()
  id_equipo: number;
  

  @Column({ length: 100, nullable: true })
  inventario: string;

  @Column({ length: 100, nullable: true })
  serie: string;

  @ManyToOne(() => Estado, (estado) => estado.equipo)
  estado: Estado;

  @ManyToOne(() => Adscripcion, (adscripcion) => adscripcion.equipo)
  adscripcion: Adscripcion;

  @Column({ length: 100, nullable: true })
  lugar: string;

  @ManyToOne(() => TipoEquipo, (tipoEquipo) => tipoEquipo.equipo)
  tipoEquipo: TipoEquipo;

  @ManyToOne(
    () => SistemaOperativo,
    (sistemaOperativo) => sistemaOperativo.equipo,
  )
  sistemaOperativo: SistemaOperativo;

  @ManyToOne(() => Procesador, (procesador) => procesador.equipo)
  procesador: Procesador;

  @ManyToOne(() => Uso, (tipoUso) => tipoUso.equipo)
  tipoUso: Uso;

  @Column({ name: 'fecha_factura' })
  fechaFactura: Date;

  @Column({ length: 100, nullable: true })
  antiguedad: string;

  @Column({ length: 100, nullable: true })
  modelo: string;

  @ManyToOne(() => Marca, (marca) => marca.equipo)
  marca: Marca;

   @OneToMany(() => Equipo, (equipo) => equipo.marca)
  equipo: Equipo;

  
}
}
