import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuCreateWithoutCategoryInput } from './menu-create-without-category.input';
import { Type } from 'class-transformer';
import { MenuCreateOrConnectWithoutCategoryInput } from './menu-create-or-connect-without-category.input';
import { MenuUpsertWithoutCategoryInput } from './menu-upsert-without-category.input';
import { MenuWhereUniqueInput } from './menu-where-unique.input';
import { MenuUpdateWithoutCategoryInput } from './menu-update-without-category.input';

@InputType()
export class MenuUpdateOneRequiredWithoutCategoryNestedInput {

    @Field(() => MenuCreateWithoutCategoryInput, {nullable:true})
    @Type(() => MenuCreateWithoutCategoryInput)
    create?: MenuCreateWithoutCategoryInput;

    @Field(() => MenuCreateOrConnectWithoutCategoryInput, {nullable:true})
    @Type(() => MenuCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: MenuCreateOrConnectWithoutCategoryInput;

    @Field(() => MenuUpsertWithoutCategoryInput, {nullable:true})
    @Type(() => MenuUpsertWithoutCategoryInput)
    upsert?: MenuUpsertWithoutCategoryInput;

    @Field(() => MenuWhereUniqueInput, {nullable:true})
    @Type(() => MenuWhereUniqueInput)
    connect?: MenuWhereUniqueInput;

    @Field(() => MenuUpdateWithoutCategoryInput, {nullable:true})
    @Type(() => MenuUpdateWithoutCategoryInput)
    update?: MenuUpdateWithoutCategoryInput;
}
