import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RestaurantCreateWithoutManagerInput } from './restaurant-create-without-manager.input';
import { Type } from 'class-transformer';
import { RestaurantCreateOrConnectWithoutManagerInput } from './restaurant-create-or-connect-without-manager.input';
import { RestaurantUpsertWithoutManagerInput } from './restaurant-upsert-without-manager.input';
import { RestaurantWhereUniqueInput } from './restaurant-where-unique.input';
import { RestaurantUpdateWithoutManagerInput } from './restaurant-update-without-manager.input';

@InputType()
export class RestaurantUncheckedUpdateOneWithoutManagerNestedInput {

    @Field(() => RestaurantCreateWithoutManagerInput, {nullable:true})
    @Type(() => RestaurantCreateWithoutManagerInput)
    create?: RestaurantCreateWithoutManagerInput;

    @Field(() => RestaurantCreateOrConnectWithoutManagerInput, {nullable:true})
    @Type(() => RestaurantCreateOrConnectWithoutManagerInput)
    connectOrCreate?: RestaurantCreateOrConnectWithoutManagerInput;

    @Field(() => RestaurantUpsertWithoutManagerInput, {nullable:true})
    @Type(() => RestaurantUpsertWithoutManagerInput)
    upsert?: RestaurantUpsertWithoutManagerInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => RestaurantWhereUniqueInput, {nullable:true})
    @Type(() => RestaurantWhereUniqueInput)
    connect?: RestaurantWhereUniqueInput;

    @Field(() => RestaurantUpdateWithoutManagerInput, {nullable:true})
    @Type(() => RestaurantUpdateWithoutManagerInput)
    update?: RestaurantUpdateWithoutManagerInput;
}
