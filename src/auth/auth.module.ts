import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'prisma/prisma.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthResolver } from './auth.resolver';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_ACCESS_KEY,
      signOptions: { expiresIn: '600s' }, // voltar aqui para mudar o tempo de expiração do token
    }),
  ],
  controllers: [AuthController],
  providers: [
    UserService,
    PrismaService,

    AuthService,
    AuthResolver,
    LocalStrategy,
    JwtStrategy,
  ],
  exports: [JwtStrategy, AuthService],
})
export class AuthModule {}
