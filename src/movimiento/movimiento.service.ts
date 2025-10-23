import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movimiento } from './entities/movimiento.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Equipo } from 'src/equipo/entities/equipo.entity';
import { CreateMovimientoDto } from './dto/create-movimiento.dto';
import { UpdateMovimientoDto } from './dto/update-movimiento.dto';

@Injectable()
export class MovimientoService {
  constructor(
    @InjectRepository(Movimiento)
    private readonly movimientoRepo: Repository<Movimiento>,
    @InjectRepository(Usuario)
    private readonly usuarioRepo: Repository<Usuario>,

    @InjectRepository(Equipo)
    private readonly equipoRepo: Repository<Equipo>,
  ) {}

  async crear(dto: CreateMovimientoDto) {
    const usuario = await this.usuarioRepo.findOne({
      where: { id_usuario: dto.idUsuario },
    });

    const equipo = await this.equipoRepo.findOne({
      where: { id_equipo: dto.idEquipo },
    });

    if (!usuario || !equipo) {
      throw new Error('Usuario o equipo no encontrado');
    }
/*
    const movimiento = this.movimientoRepo.create({
      usuario,
      equipo,
      observaciones: dto.observaciones || undefined,
    });

    return await this.movimientoRepo.save(movimiento);
  }
    */
  }
}
