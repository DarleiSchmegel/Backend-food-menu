import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuCreateWithoutCategoryInput } from './menu-create-without-category.input';
import { Type } from 'class-transformer';
import { MenuCreateOrConnectWithoutCategoryInput } from './menu-create-or-connect-without-category.input';
import { MenuWhereUniqueInput } from './menu-where-unique.input';

@InputType()
export class MenuCreateNestedOneWithoutCategoryInput {

    @Field(() => MenuCreateWithoutCategoryInput, {nullable:true})
    @Type(() => MenuCreateWithoutCategoryInput)
    create?: MenuCreateWithoutCategoryInput;

    @Field(() => MenuCreateOrConnectWithoutCategoryInput, {nullable:true})
    @Type(() => MenuCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: MenuCreateOrConnectWithoutCategoryInput;

    @Field(() => MenuWhereUniqueInput, {nullable:true})
    @Type(() => MenuWhereUniqueInput)
    connect?: MenuWhereUniqueInput;
}
