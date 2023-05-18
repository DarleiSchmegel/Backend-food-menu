import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { PlateFoodUncheckedUpdateManyWithoutMenuNestedInput } from '../plate-food/plate-food-unchecked-update-many-without-menu-nested.input';
import { CategoryUncheckedUpdateManyWithoutMenuNestedInput } from '../category/category-unchecked-update-many-without-menu-nested.input';

@InputType()
export class MenuUncheckedUpdateWithoutRestaurantInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    banner?: NullableStringFieldUpdateOperationsInput;

    @Field(() => PlateFoodUncheckedUpdateManyWithoutMenuNestedInput, {nullable:true})
    plateFood?: PlateFoodUncheckedUpdateManyWithoutMenuNestedInput;

    @Field(() => CategoryUncheckedUpdateManyWithoutMenuNestedInput, {nullable:true})
    category?: CategoryUncheckedUpdateManyWithoutMenuNestedInput;
}
