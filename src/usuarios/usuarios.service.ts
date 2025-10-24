import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>
  ){}
  async create(createUsuarioDto: CreateUsuarioDto) {
      
    let user= await this.usuarioRepository.create({
      nombre:createUsuarioDto.nombre,
      contraseña:createUsuarioDto.contraseña,
      tipoUsuario:{
        id_tipo_usuario:createUsuarioDto.tipoUsuario
      }
    })

    return await this.usuarioRepository.save(user);
  }
   async findOneByName(nombre: string) {
    return await this.usuarioRepository.findOne({where:{nombre}});
  }

  async remove(id:number) {
    return await this.usuarioRepository.delete(id);
  }
 


  findAll() {
    return this.usuarioRepository.find();
  }

  

  

  
}
