import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PlateFood } from '../plate-food/plate-food.model';
import { Menu } from '../menu/menu.model';
import { CategoryCount } from './category-count.output';

@ObjectType()
export class Category {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Int, {nullable:false})
    menuId!: number;

    @Field(() => [PlateFood], {nullable:true})
    plateFoode?: Array<PlateFood>;

    @Field(() => Menu, {nullable:false})
    menu?: Menu;

    @Field(() => CategoryCount, {nullable:false})
    _count?: CategoryCount;
}
