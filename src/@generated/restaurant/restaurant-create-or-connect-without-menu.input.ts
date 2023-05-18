import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RestaurantWhereUniqueInput } from './restaurant-where-unique.input';
import { Type } from 'class-transformer';
import { RestaurantCreateWithoutMenuInput } from './restaurant-create-without-menu.input';

@InputType()
export class RestaurantCreateOrConnectWithoutMenuInput {

    @Field(() => RestaurantWhereUniqueInput, {nullable:false})
    @Type(() => RestaurantWhereUniqueInput)
    where!: RestaurantWhereUniqueInput;

    @Field(() => RestaurantCreateWithoutMenuInput, {nullable:false})
    @Type(() => RestaurantCreateWithoutMenuInput)
    create!: RestaurantCreateWithoutMenuInput;
}
