import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuUpdateWithoutRestaurantInput } from './menu-update-without-restaurant.input';
import { Type } from 'class-transformer';
import { MenuCreateWithoutRestaurantInput } from './menu-create-without-restaurant.input';

@InputType()
export class MenuUpsertWithoutRestaurantInput {

    @Field(() => MenuUpdateWithoutRestaurantInput, {nullable:false})
    @Type(() => MenuUpdateWithoutRestaurantInput)
    update!: MenuUpdateWithoutRestaurantInput;

    @Field(() => MenuCreateWithoutRestaurantInput, {nullable:false})
    @Type(() => MenuCreateWithoutRestaurantInput)
    create!: MenuCreateWithoutRestaurantInput;
}
