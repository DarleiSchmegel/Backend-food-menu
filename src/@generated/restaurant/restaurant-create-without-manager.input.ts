import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuCreateNestedOneWithoutRestaurantInput } from '../menu/menu-create-nested-one-without-restaurant.input';

@InputType()
export class RestaurantCreateWithoutManagerInput {

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

    @Field(() => MenuCreateNestedOneWithoutRestaurantInput, {nullable:true})
    menu?: MenuCreateNestedOneWithoutRestaurantInput;
}
