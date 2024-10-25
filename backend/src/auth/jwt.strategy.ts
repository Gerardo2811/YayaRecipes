import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extrae el JWT del header
      ignoreExpiration: false, // No ignorar la expiración del token
      secretOrKey: 'secretKey',
    });
  }

  // Validar el payload del JWT y devolver los datos del usuario
  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }
}
