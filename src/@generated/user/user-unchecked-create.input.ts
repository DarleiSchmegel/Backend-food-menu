import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RestaurantUncheckedCreateNestedOneWithoutManagerInput } from '../restaurant/restaurant-unchecked-create-nested-one-without-manager.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => String, {nullable:true})
    plan?: string;

    @Field(() => RestaurantUncheckedCreateNestedOneWithoutManagerInput, {nullable:true})
    restaurant?: RestaurantUncheckedCreateNestedOneWithoutManagerInput;
}
