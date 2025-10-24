import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { Tipo_Usuario, Usuario } from './entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Usuario, Tipo_Usuario])],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports:[UsuariosService]
 
})
export class UsuariosModule {}
/*
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  providers: [UsuariosService],
  controllers: [UsuariosController],
  exports: [UsuariosService],
})
export class UsuariosModule {}


*/