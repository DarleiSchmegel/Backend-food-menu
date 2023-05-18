import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuCreateNestedOneWithoutCategoryInput } from '../menu/menu-create-nested-one-without-category.input';

@InputType()
export class CategoryCreateWithoutPlateFoodeInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => MenuCreateNestedOneWithoutCategoryInput, {nullable:false})
    menu!: MenuCreateNestedOneWithoutCategoryInput;
}
