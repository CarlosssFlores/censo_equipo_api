import { DefaultValuePipe } from "@nestjs/common"
import { Transform } from "class-transformer"
import { IsInt, IsNotEmpty, IsOptional, IsString, MinLength} from "class-validator"

export class CreateUsuarioDto {

@IsString()
@IsNotEmpty()
nombre:string

@IsString()
@MinLength(5)
@Transform(({value})=>value.trim())
@IsNotEmpty()
contraseña:string

@IsInt()
@IsOptional()
tipoUsuario?:number


}
