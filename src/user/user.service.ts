import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { User, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email },
    });
    if (existingUser) {
      throw new Error('Email já cadastrado');
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Realiza outras validações de dados...

    // const { password, ...rest } = await this.prisma.user.create({
    //   data: { ...data, password: hashedPassword },
    // });

    return await this.prisma.user.create({
      data: { ...data, password: hashedPassword },
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne({ email, id }: Prisma.UserWhereUniqueInput): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { email, id } });
    if (user) return user;

    throw new Error('Usuário não encontrado');
  }

  async update(id: number, data: Prisma.UserUpdateInput): Promise<User> {
    if (data.password) {
      // Hash da nova senha
      const hashedPassword = await bcrypt.hash(data.password, 10);
      data.password = hashedPassword;
    }

    // Realiza outras validações de dados...

    return this.prisma.user.update({ where: { id }, data });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
