import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipo } from './entities/equipo.entity';
import { UpdateEquipoDto } from './dto/update-equipo.dto';



 4134c487eba9ba2b35a160dbf82dec98af0a19f3

@Injectable()
export class EquipoService {
  constructor(
    @InjectRepository(Equipo)
    private readonly equipoRepository: Repository<Equipo>,
  ) {}

  async buscarEquipos(filtros: any, page: number = 1, limit: number = 10) {
    const query = this.equipoRepository
      .createQueryBuilder('equipo')
      .leftJoinAndSelect('equipo.marca', 'marca')
      .leftJoinAndSelect('equipo.estado', 'estado')
      .leftJoinAndSelect('equipo.adscripcion', 'adscripcion')
      .leftJoinAndSelect('equipo.tipoEquipo', 'tipoEquipo')
      .leftJoinAndSelect('equipo.sistemaOperativo', 'sistemaOperativo')
      .leftJoinAndSelect('equipo.procesador', 'procesador')
      .leftJoinAndSelect('equipo.tipoUso', 'tipoUso');

    // Filtros dinámicos
    if (filtros.inventario) {
      query.andWhere('equipo.inventario LIKE :inventario', {
        inventario: `%${filtros.inventario}%`,
      });
    }

    if (filtros.tipoEquipo) {
      query.andWhere('tipoEquipo.id = :tipoEquipo', {
        tipoEquipo: filtros.tipoEquipo,
      });
    }

    if (filtros.antiguedad) {
      query.andWhere('equipo.antiguedad LIKE :antiguedad', {
        antiguedad: `%${filtros.antiguedad}%`,
      });
    }

    if (filtros.marca) {
      query.andWhere('marca.id = :marca', { marca: filtros.marca });
    }

    if (filtros.estado) {
      query.andWhere('estado.id = :estado', { estado: filtros.estado });
    }

    if (filtros.adscripcion) {
      query.andWhere('adscripcion.id = :adscripcion', {
        adscripcion: filtros.adscripcion,
      });
    }

    if (filtros.tipoUso) {
      query.andWhere('tipoUso.id = :tipoUso', { tipoUso: filtros.tipoUso });
    }

    if (filtros.procesador) {
      query.andWhere('procesador.id = :procesador', {
        procesador: filtros.procesador,
      });
    }

    if (filtros.sistemaOperativo) {
      query.andWhere('sistemaOperativo.id = :sistemaOperativo', {
        sistemaOperativo: filtros.sistemaOperativo,
      });
    }

    // Paginación
    query.skip((page - 1) * limit).take(limit);

    // Ejecutar consulta
    const [data, total] = await query.getManyAndCount();

    return {
      total,
      page,
      limit,
      data,
    };

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

    const equipoUpdate = await this.equipoRepository.preload(updateData);
    const equipoUpdate = await this.equipoRepository.preload(updateData);


  const equipoUpdate=await this.equipoRepository.preload(updateData);

  if(!equipoUpdate){
    throw new Error(`No se encontró el equipo con id ${id_equipo}`);
  }
  return await this.equipoRepository.save(equipoUpdate);
 } 
}
