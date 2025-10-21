import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ length: 100, nullable: true })
  nombre: string;

  @Column({ length: 100, nullable: true })
  contraseña: string;

  @ManyToOne(() => Tipo_Usuario, (tipoUsuario) => tipoUsuario.usuarios)
  tipoUsuario: Tipo_Usuario;
}

@Entity()
export class Tipo_Usuario {
  @PrimaryGeneratedColumn()
  id_tipo_usuario: number;

  @Column({ nullable: true })
  tipo_usuario: string;

  @OneToMany(() => Usuario, (usuarios) => usuarios.tipoUsuario)
  usuarios: Usuario[];
}
