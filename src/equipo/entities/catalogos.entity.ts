import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Equipo } from './equipo.entity';

@Entity()
export class Uso {
  @PrimaryGeneratedColumn()
  id_tipo_uso: number;

  @Column()
  tipo_uso: string;
  @OneToMany(() => Equipo, (equipo) => equipo.tipoUso)
  equipo: Equipo[];
}

@Entity()
export class Marca {
  @PrimaryGeneratedColumn()
  id_marca: number;

  @Column()
  tipo_marca: string;

  @OneToMany(() => Equipo, (equipo) => equipo.marca)
  equipo: Equipo[];
}

@Entity()
export class Estado {
  @PrimaryGeneratedColumn()
  id_estado: number;

  @Column()
  estado: string;

  @OneToMany(() => Equipo, (equipo) => equipo.estado)
  equipo: Equipo[];
}

@Entity()
export class Adscripcion {
  @PrimaryGeneratedColumn()
  id_adscripcion: number;

  @Column()
  adscripcion: string;

  @OneToMany(() => Equipo, (equipo) => equipo.adscripcion)
  equipo: Equipo[];
}

@Entity()
export class TipoEquipo {
  @PrimaryGeneratedColumn()
  id_tipo_de_equipo: number;

  @Column()
  tipo_equipo: string;

  @OneToMany(() => Equipo, (equipo) => equipo.tipoEquipo)
  equipo: Equipo[];
}

@Entity()
export class SistemaOperativo {
  @PrimaryGeneratedColumn()
  id_sistema_operativo: number;

  @Column()
  sistema_operativo: string;

  @OneToMany(() => Equipo, (equipo) => equipo.sistemaOperativo)
  equipo: Equipo[];
}

@Entity()
export class Procesador {
  @PrimaryGeneratedColumn()
  id_procesador: number;

  @Column()
  procesador: string;

  @OneToMany(() => Equipo, (equipo) => equipo.procesador)
  equipo: Equipo[];
}
