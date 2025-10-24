import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateMarcaDto {
  @IsString()
  @IsNotEmpty()
  tipo_marca: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsString()
  @IsOptional()
  origen?: string;
}
