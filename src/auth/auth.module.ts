import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UsuariosService } from 'src/usuarios/usuarios.service';



@Module({
  imports:[UsuariosModule,
    JwtModule,
    JwtModule.register({
      global:true,
      secret: process.env.JWT,
      signOptions:{expiresIn:"1d"},

    }),
  ],
  controllers: [AuthController],
  providers: [AuthService,UsuariosService, JwtService]
})
export class AuthModule {}
