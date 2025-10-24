<<<<<<< HEAD
import { Controller, Get, Query } from '@nestjs/common';
import { EquipoService } from './equipo.service';
=======

import { Controller, Body, Patch, Param, ParseIntPipe, UseGuards,Get, Query  } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { AuthGuard } from '@nestjs/passport';
>>>>>>> a2be3ee273b121c4dad11552acb7cef9653fb7d8

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
<<<<<<< HEAD
=======
  @UseGuards(AuthGuard("jwt"))
  @Patch("update/:id")
  update(@Param('id', ParseIntPipe) id:number, @Body() equipoNuevo: UpdateEquipoDto) {
    return this.equipoService.updateEquipo( equipoNuevo,id);
  }

>>>>>>> a2be3ee273b121c4dad11552acb7cef9653fb7d8
}
