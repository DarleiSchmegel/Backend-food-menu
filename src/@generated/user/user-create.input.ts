import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RestaurantCreateNestedOneWithoutManagerInput } from '../restaurant/restaurant-create-nested-one-without-manager.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => String, {nullable:true})
    plan?: string;

    @Field(() => RestaurantCreateNestedOneWithoutManagerInput, {nullable:true})
    restaurant?: RestaurantCreateNestedOneWithoutManagerInput;
}
