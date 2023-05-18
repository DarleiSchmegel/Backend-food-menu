import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuWhereUniqueInput } from './menu-where-unique.input';
import { Type } from 'class-transformer';
import { MenuCreateWithoutRestaurantInput } from './menu-create-without-restaurant.input';

@InputType()
export class MenuCreateOrConnectWithoutRestaurantInput {

    @Field(() => MenuWhereUniqueInput, {nullable:false})
    @Type(() => MenuWhereUniqueInput)
    where!: MenuWhereUniqueInput;

    @Field(() => MenuCreateWithoutRestaurantInput, {nullable:false})
    @Type(() => MenuCreateWithoutRestaurantInput)
    create!: MenuCreateWithoutRestaurantInput;
}
