import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MenuUncheckedCreateNestedOneWithoutRestaurantInput } from '../menu/menu-unchecked-create-nested-one-without-restaurant.input';

@InputType()
export class RestaurantUncheckedCreateWithoutManagerInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    banner?: string;

    @Field(() => String, {nullable:true})
    fone?: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:true})
    openingHours?: string;

    @Field(() => MenuUncheckedCreateNestedOneWithoutRestaurantInput, {nullable:true})
    menu?: MenuUncheckedCreateNestedOneWithoutRestaurantInput;
}
