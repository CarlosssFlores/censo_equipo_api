import { Transform } from "class-transformer";
import { IsString, MinLength } from "class-validator";
export class LoginDto{
    @IsString()
      nombre:string;
      
    @IsString()
    @MinLength(5)
    @Transform(({value})=>value.trim())
      contraseña:string

}