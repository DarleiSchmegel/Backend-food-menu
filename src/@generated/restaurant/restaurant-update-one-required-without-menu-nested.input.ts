import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RestaurantCreateWithoutMenuInput } from './restaurant-create-without-menu.input';
import { Type } from 'class-transformer';
import { RestaurantCreateOrConnectWithoutMenuInput } from './restaurant-create-or-connect-without-menu.input';
import { RestaurantUpsertWithoutMenuInput } from './restaurant-upsert-without-menu.input';
import { RestaurantWhereUniqueInput } from './restaurant-where-unique.input';
import { RestaurantUpdateWithoutMenuInput } from './restaurant-update-without-menu.input';

@InputType()
export class RestaurantUpdateOneRequiredWithoutMenuNestedInput {

    @Field(() => RestaurantCreateWithoutMenuInput, {nullable:true})
    @Type(() => RestaurantCreateWithoutMenuInput)
    create?: RestaurantCreateWithoutMenuInput;

    @Field(() => RestaurantCreateOrConnectWithoutMenuInput, {nullable:true})
    @Type(() => RestaurantCreateOrConnectWithoutMenuInput)
    connectOrCreate?: RestaurantCreateOrConnectWithoutMenuInput;

    @Field(() => RestaurantUpsertWithoutMenuInput, {nullable:true})
    @Type(() => RestaurantUpsertWithoutMenuInput)
    upsert?: RestaurantUpsertWithoutMenuInput;

    @Field(() => RestaurantWhereUniqueInput, {nullable:true})
    @Type(() => RestaurantWhereUniqueInput)
    connect?: RestaurantWhereUniqueInput;

    @Field(() => RestaurantUpdateWithoutMenuInput, {nullable:true})
    @Type(() => RestaurantUpdateWithoutMenuInput)
    update?: RestaurantUpdateWithoutMenuInput;
}
