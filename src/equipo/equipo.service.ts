import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipo } from './entities/equipo.entity';

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
  }
}
