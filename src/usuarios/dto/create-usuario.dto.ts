import { Transform } from "class-transformer"
import { IsInt, IsString, MinLength} from "class-validator"

export class CreateUsuarioDto {
@IsString()
nombre:string

@IsString()
@MinLength(5)
@Transform(({value})=>value.trim())
contraseña:string

@IsInt()
tipoUsuario:number


}
