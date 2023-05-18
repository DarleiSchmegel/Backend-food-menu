import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RestaurantCreateWithoutMenuInput } from './restaurant-create-without-menu.input';
import { Type } from 'class-transformer';
import { RestaurantCreateOrConnectWithoutMenuInput } from './restaurant-create-or-connect-without-menu.input';
import { RestaurantWhereUniqueInput } from './restaurant-where-unique.input';

@InputType()
export class RestaurantCreateNestedOneWithoutMenuInput {

    @Field(() => RestaurantCreateWithoutMenuInput, {nullable:true})
    @Type(() => RestaurantCreateWithoutMenuInput)
    create?: RestaurantCreateWithoutMenuInput;

    @Field(() => RestaurantCreateOrConnectWithoutMenuInput, {nullable:true})
    @Type(() => RestaurantCreateOrConnectWithoutMenuInput)
    connectOrCreate?: RestaurantCreateOrConnectWithoutMenuInput;

    @Field(() => RestaurantWhereUniqueInput, {nullable:true})
    @Type(() => RestaurantWhereUniqueInput)
    connect?: RestaurantWhereUniqueInput;
}
