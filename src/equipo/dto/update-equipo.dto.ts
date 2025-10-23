import { PartialType } from '@nestjs/mapped-types';
import { CreateEquipoDto } from './create-equipo.dto';
import {  IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateEquipoDto extends PartialType(CreateEquipoDto) {
   @IsInt()
   @IsOptional()
   id_estado?:number
   
   @IsInt()
   @IsOptional()
   id_adscripcion?: number;

   @IsString()
   @IsOptional()
   lugar?: string;
  
   @IsInt()
   @IsOptional()
   id_sistema_operativo?: number;
    
   @IsInt()
   @IsOptional()
   id_procesador?: number;

   @IsInt()
   @IsOptional()
   id_tipo_uso?: number;

   @IsString()
   @IsOptional()
   modelo?: string;

   @IsInt()
   @IsOptional()
   id_marca?: number;

}
