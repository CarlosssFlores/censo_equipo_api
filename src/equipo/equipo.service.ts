import { Injectable } from '@nestjs/common';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Equipo } from './entities/equipo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EquipoService {
  constructor(
    @InjectRepository(Equipo)
    private readonly equipoRepository: Repository <Equipo>
  ){}
 async updateEquipo(equipoNuevo:UpdateEquipoDto,id_equipo:number){
  const updateData={
    lugar: equipoNuevo.lugar,
    modelo: equipoNuevo.modelo,
    estado: equipoNuevo.id_estado ? { id_estado: equipoNuevo.id_estado } : undefined,
    adscripcion: equipoNuevo.id_adscripcion ? { id_adscripcion: equipoNuevo.id_adscripcion } : undefined,
    sistemaOperativo: equipoNuevo.id_sistema_operativo ? { id_sistema_operativo: equipoNuevo.id_sistema_operativo } : undefined,
    procesador: equipoNuevo.id_procesador ? { id_procesador: equipoNuevo.id_procesador } : undefined,
    tipoUso: equipoNuevo.id_tipo_uso ? { id_tipo_uso: equipoNuevo.id_tipo_uso } : undefined,
    marca: equipoNuevo.id_marca ? { id_marca: equipoNuevo.id_marca } : undefined,
  };



  const equipoUpdate=await this.equipoRepository.preload(updateData);

  if(!equipoUpdate){
    throw new Error(`No se encontró el equipo con id ${id_equipo}`);

  }
  return await this.equipoRepository.save(equipoUpdate);


 } 
}

