import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginUserResponse } from './dto/login-user-response';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne({ email });

    if (!user) return new Error(`Usuário não encontrado`);
    if (user.password) {
      const valid = await bcrypt.compare(pass, user.password);
      if (valid) {
        const userResult = {
          name: user.name,
          email: user.email,
          id: user.id,
          plan: user.plan,
        };
        console.log(userResult);
        return userResult;
      } else {
        throw new UnauthorizedException();
        return new Error(`Senha invalida`);
      }
    }
  }

  async signIn(user: User): Promise<LoginUserResponse> {
    return {
      access_token: this.jwtService.sign({
        name: user.name,
        email: user.email,
        id: user.id,
        plan: user.plan,
      }),
    };
  }
}
