import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Menu } from '../menu/menu.model';
import { Category } from '../category/category.model';

@ObjectType()
export class PlateFood {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    ingredients!: string;

    @Field(() => String, {nullable:false})
    setupTime!: string;

    @Field(() => String, {nullable:true})
    image!: string | null;

    @Field(() => Int, {nullable:false})
    menuId!: number;

    @Field(() => Int, {nullable:false})
    categoryId!: number;

    @Field(() => Menu, {nullable:false})
    menu?: Menu;

    @Field(() => Category, {nullable:false})
    category?: Category;
}
