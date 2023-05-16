import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RestaurantUpdateWithoutManagerInput } from './restaurant-update-without-manager.input';
import { Type } from 'class-transformer';
import { RestaurantCreateWithoutManagerInput } from './restaurant-create-without-manager.input';

@InputType()
export class RestaurantUpsertWithoutManagerInput {

    @Field(() => RestaurantUpdateWithoutManagerInput, {nullable:false})
    @Type(() => RestaurantUpdateWithoutManagerInput)
    update!: RestaurantUpdateWithoutManagerInput;

    @Field(() => RestaurantCreateWithoutManagerInput, {nullable:false})
    @Type(() => RestaurantCreateWithoutManagerInput)
    create!: RestaurantCreateWithoutManagerInput;
}
