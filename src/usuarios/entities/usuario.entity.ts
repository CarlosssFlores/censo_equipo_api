import { Movimiento } from 'src/movimiento/entities/movimiento.entity';
import {Column,  Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';



@Entity()
export class Tipo_Usuario {
    @PrimaryGeneratedColumn()
    id_tipo_usuario: number;

    @Column({length:50, nullable:true})
    tipo_usuario:string

    @OneToMany(() => Usuario, (usuarios) => usuarios.tipoUsuario)
    usuarios: Usuario[];
    
}

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ length: 100, nullable: true })
  nombre: string;

    @Column({length:100,nullable:true})
    contraseña:string
    
    
    @ManyToOne(()=>Tipo_Usuario,tipoUsuario=>tipoUsuario.usuarios)
    tipoUsuario:Tipo_Usuario;
    
    @OneToMany(()=>Movimiento, movimiento=>movimiento.id_movimiento)
    movimiento:Movimiento[];

}

