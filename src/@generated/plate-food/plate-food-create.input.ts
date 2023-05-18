import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuCreateNestedOneWithoutPlateFoodInput } from '../menu/menu-create-nested-one-without-plate-food.input';
import { CategoryCreateNestedOneWithoutPlateFoodeInput } from '../category/category-create-nested-one-without-plate-foode.input';

@InputType()
export class PlateFoodCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    ingredients!: string;

    @Field(() => String, {nullable:false})
    setupTime!: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => MenuCreateNestedOneWithoutPlateFoodInput, {nullable:false})
    menu!: MenuCreateNestedOneWithoutPlateFoodInput;

    @Field(() => CategoryCreateNestedOneWithoutPlateFoodeInput, {nullable:false})
    category!: CategoryCreateNestedOneWithoutPlateFoodeInput;
}
