import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id_usuario: number

    @Column({nullable:true})
    id_tipo_usuario:number

    @Column({length:100, nullable:true})
    nombre:string

    @Column({length:100,nullable:true})
    contraseña:string
    
   
    

}
@Entity()
export class Tipo_Usuario{
    
    @PrimaryGeneratedColumn()
    id_tipo_usuario:number
    @Column({nullable:true})
    tipo_usuario:string

}