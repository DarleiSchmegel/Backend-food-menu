import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RestaurantCreateWithoutManagerInput } from './restaurant-create-without-manager.input';
import { Type } from 'class-transformer';
import { RestaurantCreateOrConnectWithoutManagerInput } from './restaurant-create-or-connect-without-manager.input';
import { RestaurantWhereUniqueInput } from './restaurant-where-unique.input';

@InputType()
export class RestaurantCreateNestedOneWithoutManagerInput {

    @Field(() => RestaurantCreateWithoutManagerInput, {nullable:true})
    @Type(() => RestaurantCreateWithoutManagerInput)
    create?: RestaurantCreateWithoutManagerInput;

    @Field(() => RestaurantCreateOrConnectWithoutManagerInput, {nullable:true})
    @Type(() => RestaurantCreateOrConnectWithoutManagerInput)
    connectOrCreate?: RestaurantCreateOrConnectWithoutManagerInput;

    @Field(() => RestaurantWhereUniqueInput, {nullable:true})
    @Type(() => RestaurantWhereUniqueInput)
    connect?: RestaurantWhereUniqueInput;
}
