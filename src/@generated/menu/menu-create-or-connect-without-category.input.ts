import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuWhereUniqueInput } from './menu-where-unique.input';
import { Type } from 'class-transformer';
import { MenuCreateWithoutCategoryInput } from './menu-create-without-category.input';

@InputType()
export class MenuCreateOrConnectWithoutCategoryInput {

    @Field(() => MenuWhereUniqueInput, {nullable:false})
    @Type(() => MenuWhereUniqueInput)
    where!: MenuWhereUniqueInput;

    @Field(() => MenuCreateWithoutCategoryInput, {nullable:false})
    @Type(() => MenuCreateWithoutCategoryInput)
    create!: MenuCreateWithoutCategoryInput;
}
