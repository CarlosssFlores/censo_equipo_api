import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movimiento } from './entities/movimiento.entity';
import { MovimientoService } from './movimiento.service';
import { MovimientoController } from './movimiento.controller';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Equipo } from 'src/equipo/entities/equipo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movimiento, Usuario, Equipo])],
  controllers: [MovimientoController],
  providers: [MovimientoService],
})
export class MovimientoModule {}
