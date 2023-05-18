import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuCreateWithoutRestaurantInput } from './menu-create-without-restaurant.input';
import { Type } from 'class-transformer';
import { MenuCreateOrConnectWithoutRestaurantInput } from './menu-create-or-connect-without-restaurant.input';
import { MenuUpsertWithoutRestaurantInput } from './menu-upsert-without-restaurant.input';
import { MenuWhereUniqueInput } from './menu-where-unique.input';
import { MenuUpdateWithoutRestaurantInput } from './menu-update-without-restaurant.input';

@InputType()
export class MenuUncheckedUpdateOneWithoutRestaurantNestedInput {

    @Field(() => MenuCreateWithoutRestaurantInput, {nullable:true})
    @Type(() => MenuCreateWithoutRestaurantInput)
    create?: MenuCreateWithoutRestaurantInput;

    @Field(() => MenuCreateOrConnectWithoutRestaurantInput, {nullable:true})
    @Type(() => MenuCreateOrConnectWithoutRestaurantInput)
    connectOrCreate?: MenuCreateOrConnectWithoutRestaurantInput;

    @Field(() => MenuUpsertWithoutRestaurantInput, {nullable:true})
    @Type(() => MenuUpsertWithoutRestaurantInput)
    upsert?: MenuUpsertWithoutRestaurantInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => MenuWhereUniqueInput, {nullable:true})
    @Type(() => MenuWhereUniqueInput)
    connect?: MenuWhereUniqueInput;

    @Field(() => MenuUpdateWithoutRestaurantInput, {nullable:true})
    @Type(() => MenuUpdateWithoutRestaurantInput)
    update?: MenuUpdateWithoutRestaurantInput;
}
