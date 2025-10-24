
import { Controller, Body, Patch, Param, ParseIntPipe, UseGuards,Get, Query  } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('equipos')
export class EquipoController {
  constructor(private readonly equipoService: EquipoService) {}
  @UseGuards(AuthGuard("jwt"))
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

  @UseGuards(AuthGuard("jwt"))
  @Get('usos')
  findUsos() {
    return this.equipoService.findAllUsos();
  }
  @UseGuards(AuthGuard("jwt"))
  @Get('marcas')
  findMarcas() {
    return this.equipoService.findAllMarcas();
  }
  @UseGuards(AuthGuard("jwt"))
  @Get('estados')
  findEstados() {
    return this.equipoService.findAllEstados();
  }
  @UseGuards(AuthGuard("jwt"))
  @Get('adscripciones')
  findAdscripciones() {
    return this.equipoService.findAllAdscripciones();
  }
  @UseGuards(AuthGuard("jwt"))
  @Get('tipos-equipo')
  findTiposEquipo() {
    return this.equipoService.findAllTiposEquipo();
  }
  @UseGuards(AuthGuard("jwt"))
  @Get('sistemas-operativos')
  findSistemasOperativos() {
    return this.equipoService.findAllSistemasOperativos();
  }
  @UseGuards(AuthGuard("jwt"))
  @Get('procesadores')
  findProcesadores() {
    return this.equipoService.findAllProcesadores();
  }

}
