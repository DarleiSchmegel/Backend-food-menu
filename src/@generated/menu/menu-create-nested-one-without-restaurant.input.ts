import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuCreateWithoutRestaurantInput } from './menu-create-without-restaurant.input';
import { Type } from 'class-transformer';
import { MenuCreateOrConnectWithoutRestaurantInput } from './menu-create-or-connect-without-restaurant.input';
import { MenuWhereUniqueInput } from './menu-where-unique.input';

@InputType()
export class MenuCreateNestedOneWithoutRestaurantInput {

    @Field(() => MenuCreateWithoutRestaurantInput, {nullable:true})
    @Type(() => MenuCreateWithoutRestaurantInput)
    create?: MenuCreateWithoutRestaurantInput;

    @Field(() => MenuCreateOrConnectWithoutRestaurantInput, {nullable:true})
    @Type(() => MenuCreateOrConnectWithoutRestaurantInput)
    connectOrCreate?: MenuCreateOrConnectWithoutRestaurantInput;

    @Field(() => MenuWhereUniqueInput, {nullable:true})
    @Type(() => MenuWhereUniqueInput)
    connect?: MenuWhereUniqueInput;
}
