import { Module } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { EquipoController } from './equipo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Equipo } from './entities/equipo.entity';
import { Estado, Marca, Uso, Adscripcion, TipoEquipo, SistemaOperativo, Procesador } from './entities/catalogo.entities';

@Module({
  imports:[TypeOrmModule.forFeature([Equipo, Estado, Marca, Uso, Adscripcion, TipoEquipo, SistemaOperativo, Procesador])],
  controllers: [EquipoController],
  providers: [EquipoService],
  exports:[EquipoService],
})
export class EquipoModule {}
