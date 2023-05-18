import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateNestedOneWithoutPlateFoodeInput } from '../category/category-create-nested-one-without-plate-foode.input';

@InputType()
export class PlateFoodCreateWithoutMenuInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    ingredients!: string;

    @Field(() => String, {nullable:false})
    setupTime!: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => CategoryCreateNestedOneWithoutPlateFoodeInput, {nullable:false})
    category!: CategoryCreateNestedOneWithoutPlateFoodeInput;
}
