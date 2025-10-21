import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movimiento } from './entities/movimiento.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Injectable()
export class MovimientoService {
  constructor(
    @InjectRepository(Movimiento)
    private movimientoRepository: Repository<Movimiento>,
  ) {}

  async crearMovimiento(
    usuario: Usuario,
    camposModificados: string[],
  ): Promise<Movimiento> {
    const movimiento = new Movimiento();
    movimiento.usuario = usuario;
    movimiento.observaciones = `Se modificaron los campos: ${camposModificados.join(', ')}`;

    return await this.movimientoRepository.save(movimiento);
  }
}
