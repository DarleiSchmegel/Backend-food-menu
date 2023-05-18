import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PlateFoodUncheckedCreateNestedManyWithoutCategoryInput } from '../plate-food/plate-food-unchecked-create-nested-many-without-category.input';

@InputType()
export class CategoryUncheckedCreateWithoutMenuInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => PlateFoodUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    plateFoode?: PlateFoodUncheckedCreateNestedManyWithoutCategoryInput;
}
