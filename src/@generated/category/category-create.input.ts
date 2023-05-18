import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlateFoodCreateNestedManyWithoutCategoryInput } from '../plate-food/plate-food-create-nested-many-without-category.input';
import { MenuCreateNestedOneWithoutCategoryInput } from '../menu/menu-create-nested-one-without-category.input';

@InputType()
export class CategoryCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => PlateFoodCreateNestedManyWithoutCategoryInput, {nullable:true})
    plateFoode?: PlateFoodCreateNestedManyWithoutCategoryInput;

    @Field(() => MenuCreateNestedOneWithoutCategoryInput, {nullable:false})
    menu!: MenuCreateNestedOneWithoutCategoryInput;
}
