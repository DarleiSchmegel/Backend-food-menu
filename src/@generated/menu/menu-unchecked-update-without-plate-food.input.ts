import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { CategoryUncheckedUpdateManyWithoutMenuNestedInput } from '../category/category-unchecked-update-many-without-menu-nested.input';

@InputType()
export class MenuUncheckedUpdateWithoutPlateFoodInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    banner?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    restaurantId?: IntFieldUpdateOperationsInput;

    @Field(() => CategoryUncheckedUpdateManyWithoutMenuNestedInput, {nullable:true})
    category?: CategoryUncheckedUpdateManyWithoutMenuNestedInput;
}
