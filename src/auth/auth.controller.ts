import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUsuarioDto } from 'src/usuarios/dto/create-usuario.dto';
import { LoginDto } from './dto/login.dto';


@Controller('auth')
export class AuthController {
    constructor( private readonly authService:AuthService){}
    @Post("registro")
    registro(@Body() registroDto:CreateUsuarioDto ){
        return this.authService.registro(registroDto);

    }
    @Post("login")
    login(@Body() loginDto:LoginDto){
        return this.authService.login(loginDto);
    }
    
   



}
