import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuCreateNestedOneWithoutPlateFoodInput } from '../menu/menu-create-nested-one-without-plate-food.input';

@InputType()
export class PlateFoodCreateWithoutCategoryInput {

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
}
