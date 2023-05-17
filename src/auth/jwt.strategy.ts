import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true, // Voltar aqui caso queira que o token tenha tempo de expiração
      secretOrKey: process.env.JWT_ACCESS_KEY,
    });
  }

  async validate(payload: any) {
    // payload = decoded JWT
    return {
      id: payload.id,
      name: payload.name,
      email: payload.email,
      plan: payload.plan,
    };
  }
}
