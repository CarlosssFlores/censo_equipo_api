import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movimiento } from './entities/movimiento.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Equipo } from 'src/equipo/entities/equipo.entity';
import { CreateMovimientoDto } from './dto/create-movimiento.dto';


@Injectable()
export class MovimientoService {
  constructor(
    @InjectRepository(Movimiento)
    private readonly movimientoRepo: Repository<Movimiento>,

  ) {}

  async crear(dto: CreateMovimientoDto) {

    const movimiento = this.movimientoRepo.create({ 
      user:{id_usuario:dto.idUsuario},
      equipo:{id_equipo:dto.idEquipo},
      fechaMovimiento:new Date(),
      observaciones:dto.observaciones
    });

    return await this.movimientoRepo.save(movimiento);
  }
    
  }

