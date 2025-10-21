import { PassportStrategy } from "@nestjs/passport";
import{ExtractJwt,Strategy} from 'passport-jwt'

export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey:process.env.JWT
        });
    }
    async validate(dataUser:any){
    return {
      id: dataUser.id,
      nombre: dataUser.nombre,
      tipoUsuario: dataUser.tipoUsuario,
    };
    }
}