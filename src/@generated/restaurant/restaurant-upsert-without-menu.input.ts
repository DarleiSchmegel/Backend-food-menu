import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RestaurantUpdateWithoutMenuInput } from './restaurant-update-without-menu.input';
import { Type } from 'class-transformer';
import { RestaurantCreateWithoutMenuInput } from './restaurant-create-without-menu.input';

@InputType()
export class RestaurantUpsertWithoutMenuInput {

    @Field(() => RestaurantUpdateWithoutMenuInput, {nullable:false})
    @Type(() => RestaurantUpdateWithoutMenuInput)
    update!: RestaurantUpdateWithoutMenuInput;

    @Field(() => RestaurantCreateWithoutMenuInput, {nullable:false})
    @Type(() => RestaurantCreateWithoutMenuInput)
    create!: RestaurantCreateWithoutMenuInput;
}
