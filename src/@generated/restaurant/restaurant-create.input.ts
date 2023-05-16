import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRestaurantInput } from '../user/user-create-nested-one-without-restaurant.input';

@InputType()
export class RestaurantCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    banner?: string;

    @Field(() => UserCreateNestedOneWithoutRestaurantInput, {nullable:false})
    manager!: UserCreateNestedOneWithoutRestaurantInput;
}
