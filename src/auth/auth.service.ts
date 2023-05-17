import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginUserResponse } from './dto/login-user-response';
import { CreateUserInput } from 'src/user/dto/create-user.input';

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

  async signup(user: CreateUserInput) {
    try {
      const existsUser = await this.usersService.findOne({ email: user.email });

      if (existsUser) {
        throw new Error(`Email ${user.email} já cadastrado no sistema!`);
      }

      const hashPassword = await bcrypt.hash(user.password, 10);
      user.password = hashPassword;

      const newUser = await this.usersService.create(user);

      if (newUser) {
        return {
          access_token: this.jwtService.sign({
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            plan: newUser.plan,
          }),
        };
      }
    } catch (error) {
      return new Error(error.message);
    }
  }
}
