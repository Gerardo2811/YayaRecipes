import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy'; // Importa la estrategia
import { ConfigModule, ConfigService } from '@nestjs/config'; // Importar para manejar variables de entorno
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot(), // Habilita el uso de variables de entorno
    PassportModule, // Se necesita para usar la estrategia de passport
    JwtModule.registerAsync({
      imports: [ConfigModule], // Usar ConfigModule para acceder a las variables de entorno
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'), // Cargar la clave secreta desde .env
        signOptions: { expiresIn: '1h' }, // Tiempo de expiración del token
      }),
    }),
  ],
  providers: [AuthService, JwtStrategy, PrismaService], // Proveer el JwtStrategy y AuthService
  controllers: [AuthController],
  exports: [AuthService], // Exportar el AuthService para que pueda ser utilizado en otros módulos
})
export class AuthModule {}
