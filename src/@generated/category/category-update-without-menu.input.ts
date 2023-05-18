import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PlateFoodUpdateManyWithoutCategoryNestedInput } from '../plate-food/plate-food-update-many-without-category-nested.input';

@InputType()
export class CategoryUpdateWithoutMenuInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => PlateFoodUpdateManyWithoutCategoryNestedInput, {nullable:true})
    plateFoode?: PlateFoodUpdateManyWithoutCategoryNestedInput;
}
