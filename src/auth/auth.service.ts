import { BadRequestException, Injectable, UnauthorizedException, InternalServerErrorException } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import * as argon2 from 'argon2';
import { LoginDto } from './dto/login.dto';
import { CreateUsuarioDto } from 'src/usuarios/dto/create-usuario.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usuarioService:UsuariosService,
        private readonly jwtService:JwtService
    ){}

    async registro({nombre, contraseña,tipoUsuario}: CreateUsuarioDto){
        
        const usuario = await this.usuarioService.findOneByName(nombre);
        if(usuario){
            throw new BadRequestException("Nombre de usuario ya existente");
        }

        try{
            const hashedContraseña = await argon2.hash(contraseña);

            await this.usuarioService.create({
                nombre,
                contraseña: hashedContraseña,
                tipoUsuario,
            });

            return {
                message: "Usuario registrado exitosamente"
            };
        }catch(error){
            
            throw new InternalServerErrorException('Error al crear el usuario');
        }
    }

    async login({nombre, contraseña}:LoginDto){
        const usuario= await this.usuarioService.findOneByName(nombre)
        if(!usuario){
            throw new UnauthorizedException("Usuario no encontrado");

        }
        const contraseñaValida= await argon2.verify(contraseña, usuario.contraseña);
        if(!contraseñaValida){
            throw new UnauthorizedException("Contraseña invalida");

        }
        const dataUser={
            id:usuario.id_usuario,
            nombre:usuario.nombre, 
            tipoUsuario:usuario.tipoUsuario.id_tipo_usuario
        }

        const token=await this.jwtService.sign(dataUser)
        return{
           token:token,
        };
    }
    







}
