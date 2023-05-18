import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRestaurantInput } from '../user/user-create-nested-one-without-restaurant.input';

@InputType()
export class RestaurantCreateWithoutMenuInput {

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

    @Field(() => UserCreateNestedOneWithoutRestaurantInput, {nullable:false})
    manager!: UserCreateNestedOneWithoutRestaurantInput;
}
