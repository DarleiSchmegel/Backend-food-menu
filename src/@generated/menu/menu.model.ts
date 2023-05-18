import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Restaurant } from '../restaurant/restaurant.model';
import { PlateFood } from '../plate-food/plate-food.model';
import { Category } from '../category/category.model';
import { MenuCount } from './menu-count.output';

@ObjectType()
export class Menu {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    banner!: string | null;

    @Field(() => Int, {nullable:false})
    restaurantId!: number;

    @Field(() => Restaurant, {nullable:false})
    restaurant?: Restaurant;

    @Field(() => [PlateFood], {nullable:true})
    plateFood?: Array<PlateFood>;

    @Field(() => [Category], {nullable:true})
    category?: Array<Category>;

    @Field(() => MenuCount, {nullable:false})
    _count?: MenuCount;
}
