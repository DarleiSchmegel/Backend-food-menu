import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RestaurantWhereUniqueInput } from './restaurant-where-unique.input';
import { Type } from 'class-transformer';
import { RestaurantCreateWithoutManagerInput } from './restaurant-create-without-manager.input';

@InputType()
export class RestaurantCreateOrConnectWithoutManagerInput {

    @Field(() => RestaurantWhereUniqueInput, {nullable:false})
    @Type(() => RestaurantWhereUniqueInput)
    where!: RestaurantWhereUniqueInput;

    @Field(() => RestaurantCreateWithoutManagerInput, {nullable:false})
    @Type(() => RestaurantCreateWithoutManagerInput)
    create!: RestaurantCreateWithoutManagerInput;
}
