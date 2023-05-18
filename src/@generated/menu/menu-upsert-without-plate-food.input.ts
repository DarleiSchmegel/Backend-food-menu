import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuUpdateWithoutPlateFoodInput } from './menu-update-without-plate-food.input';
import { Type } from 'class-transformer';
import { MenuCreateWithoutPlateFoodInput } from './menu-create-without-plate-food.input';

@InputType()
export class MenuUpsertWithoutPlateFoodInput {

    @Field(() => MenuUpdateWithoutPlateFoodInput, {nullable:false})
    @Type(() => MenuUpdateWithoutPlateFoodInput)
    update!: MenuUpdateWithoutPlateFoodInput;

    @Field(() => MenuCreateWithoutPlateFoodInput, {nullable:false})
    @Type(() => MenuCreateWithoutPlateFoodInput)
    create!: MenuCreateWithoutPlateFoodInput;
}
