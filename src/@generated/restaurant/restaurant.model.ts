import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Menu } from '../menu/menu.model';

@ObjectType()
export class Restaurant {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    banner!: string | null;

    @Field(() => String, {nullable:true})
    fone!: string | null;

    @Field(() => String, {nullable:true})
    address!: string | null;

    @Field(() => String, {nullable:true})
    openingHours!: string | null;

    @Field(() => Int, {nullable:false})
    managerId!: number;

    @Field(() => User, {nullable:false})
    manager?: User;

    @Field(() => Menu, {nullable:true})
    menu?: Menu | null;
}
