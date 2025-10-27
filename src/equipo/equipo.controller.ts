import {
  Controller,
  Body,
  Patch,
  Param,
  ParseIntPipe,
  UseGuards,
  Get,
  Query,
} from '@nestjs/common';
import { CatalogosService, EquipoService } from './equipo.service';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('catalogos')
@UseGuards(AuthGuard('jwt'))
export class CatalogosController {
  constructor(private readonly catalogosService: CatalogosService) {}

  @Get('usos')
  findUsos() {
    return this.catalogosService.findAllUsos();
  }

  @Get('marcas')
  findMarcas() {
    return this.catalogosService.findAllMarcas();
  }

  @Get('estados')
  findEstados() {
    return this.catalogosService.findAllEstados();
  }

  @Get('adscripciones')
  findAdscripciones() {
    return this.catalogosService.findAllAdscripciones();
  }

  @Get('tipos-equipo')
  findTiposEquipo() {
    return this.catalogosService.findAllTiposEquipo();
  }

  @Get('sistemas-operativos')
  findSistemasOperativos() {
    return this.catalogosService.findAllSistemasOperativos();
  }

  @Get('procesadores')
  findProcesadores() {
    return this.catalogosService.findAllProcesadores();
  }
}

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
  @UseGuards(AuthGuard('jwt'))
  @Patch('update/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() equipoNuevo: UpdateEquipoDto,
  ) {
    return this.equipoService.updateEquipo(equipoNuevo, id);
  }
}
