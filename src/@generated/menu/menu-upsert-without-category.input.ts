import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuUpdateWithoutCategoryInput } from './menu-update-without-category.input';
import { Type } from 'class-transformer';
import { MenuCreateWithoutCategoryInput } from './menu-create-without-category.input';

@InputType()
export class MenuUpsertWithoutCategoryInput {

    @Field(() => MenuUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => MenuUpdateWithoutCategoryInput)
    update!: MenuUpdateWithoutCategoryInput;

    @Field(() => MenuCreateWithoutCategoryInput, {nullable:false})
    @Type(() => MenuCreateWithoutCategoryInput)
    create!: MenuCreateWithoutCategoryInput;
}
