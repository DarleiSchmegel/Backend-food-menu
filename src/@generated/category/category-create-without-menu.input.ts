import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlateFoodCreateNestedManyWithoutCategoryInput } from '../plate-food/plate-food-create-nested-many-without-category.input';

@InputType()
export class CategoryCreateWithoutMenuInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => PlateFoodCreateNestedManyWithoutCategoryInput, {nullable:true})
    plateFoode?: PlateFoodCreateNestedManyWithoutCategoryInput;
}
