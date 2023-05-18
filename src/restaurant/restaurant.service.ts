import { Injectable } from '@nestjs/common';
import { CreateRestaurantInput } from './dto/create-restaurant.input';
import { UpdateRestaurantInput } from './dto/update-restaurant.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class RestaurantService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateRestaurantInput) {
    return await this.prisma.restaurant.create({ data });
  }

  async findAll() {
    return await this.prisma.restaurant.findMany({
      include: { manager: true },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} restaurant`;
  }

  update(id: number, updateRestaurantInput: UpdateRestaurantInput) {
    return `This action updates a #${id} restaurant`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurant`;
  }
}
