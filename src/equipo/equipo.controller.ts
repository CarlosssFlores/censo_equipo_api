import { Controller, Get, Query } from '@nestjs/common';
import { EquipoService } from './equipo.service';

@Controller('equipos')
export class EquipoController {
  constructor(private readonly equipoService: EquipoService) {}

  @Get('buscar')
  async buscarEquipos(
    @Query() filtros: any,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.equipoService.buscarEquipos(filtros, +page, +limit);
  }
}
