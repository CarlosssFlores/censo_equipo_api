
import { Controller, Body, Patch, Param, ParseIntPipe, UseGuards,Get, Query  } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { AuthGuard } from '@nestjs/passport';

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
  @UseGuards(AuthGuard("jwt"))
  @Patch("update/:id")
  update(@Param('id', ParseIntPipe) id:number, @Body() equipoNuevo: UpdateEquipoDto) {
    return this.equipoService.updateEquipo( equipoNuevo,id);
  }

}
