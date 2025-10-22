import { Controller, Body, Patch, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('equipo')
export class EquipoController {
  constructor(private readonly equipoService: EquipoService) {}

  @UseGuards(AuthGuard("jwt"))
  @Patch("update/:id")
  update(@Param('id', ParseIntPipe) id:number, @Body() equipoNuevo: UpdateEquipoDto) {
    return this.equipoService.updateEquipo( equipoNuevo,id);
  }

}
