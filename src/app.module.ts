import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MovimientoModule } from './movimiento/movimiento.module';
import { EquipoModule } from './equipo/equipo.module';
import { AuthModule } from './auth/auth.module';





@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      //autoLoadEntities: true,
      synchronize: true,
    }),
    UsuariosModule,

    MovimientoModule,
    EquipoModule,
    AuthModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
