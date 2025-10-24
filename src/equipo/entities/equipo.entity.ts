import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
<<<<<<<<< Temporary merge branch 1
import { Adscripcion, Estado, Marca, Procesador, SistemaOperativo, TipoEquipo, Uso } from './catalogo.entities';
import { Movimiento } from 'src/movimiento/entities/movimiento.entity';


=========
import {
  Adscripcion,
  Estado,
  Marca,
  Procesador,
  SistemaOperativo,
  TipoEquipo,
  Uso,
} from './catalogo.entities';
import { Movimiento } from 'src/movimiento/entities/movimiento.entity';
>>>>>>>>> Temporary merge branch 2

@Entity()
export class Equipo {
  @PrimaryGeneratedColumn()
  id_equipo: number;
  //checar bien aqui si estoy bien

  @Column({ length: 100, nullable: true })
  inventario: string;

  @Column({ length: 100, nullable: true })
  serie: string;
  
  @Column({ length: 100, nullable: true })
  lugar: string;

  @ManyToOne(() => TipoEquipo, (tipoEquipo) => tipoEquipo.equipo)
  tipoEquipo: TipoEquipo;

  @ManyToOne(() => SistemaOperativo,(sistemaOperativo) => sistemaOperativo.equipo)
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

  
  //Relaciones
  @OneToMany(()=>Movimiento, mov => mov.equipo)
  mov:Movimiento[]

  @ManyToOne(() => Estado, estado => estado.equipo)
  estado: Estado;

  @ManyToOne(() => Adscripcion, (adscripcion) => adscripcion.equipo)
  adscripcion: Adscripcion;

   @ManyToOne(() => TipoEquipo, tipoEquipo => tipoEquipo.equipo)
  tipoEquipo: TipoEquipo;

  @ManyToOne(() => SistemaOperativo, sistemaOperativo => sistemaOperativo.equipo)
  sistemaOperativo: SistemaOperativo;

  @ManyToOne(() => Procesador, procesador => procesador.equipo)
  procesador: Procesador;

  @ManyToOne(() => Uso, tipoUso => tipoUso.equipo)
  tipoUso: Uso;

  @ManyToOne(() => Marca, marca => marca.equipo)
  marca: Marca;

  @OneToMany(() => Equipo, (equipo) => equipo.marca)
<<<<<<<<< Temporary merge branch 1
  equipo: Equipo[];

  @OneToMany(()=> Movimiento, movimiento=>movimiento.id_movimiento)
  movimiento:Movimiento[];

  
}

=========
  equipo: Equipo;
}
>>>>>>>>> Temporary merge branch 2
