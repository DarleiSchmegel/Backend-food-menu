import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PlateFoodUncheckedUpdateManyWithoutCategoryNestedInput } from '../plate-food/plate-food-unchecked-update-many-without-category-nested.input';

@InputType()
export class CategoryUncheckedUpdateWithoutMenuInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => PlateFoodUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    plateFoode?: PlateFoodUncheckedUpdateManyWithoutCategoryNestedInput;
}
