import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovimientoDto {
  @IsNotEmpty()
  @IsNumber()
  idUsuario: number;

  @IsNotEmpty()
  @IsNumber()
  idEquipo: number;

  @IsOptional()
  @IsString()
  observaciones?: string;
}
