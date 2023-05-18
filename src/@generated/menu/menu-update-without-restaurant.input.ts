import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { PlateFoodUpdateManyWithoutMenuNestedInput } from '../plate-food/plate-food-update-many-without-menu-nested.input';
import { CategoryUpdateManyWithoutMenuNestedInput } from '../category/category-update-many-without-menu-nested.input';

@InputType()
export class MenuUpdateWithoutRestaurantInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    banner?: NullableStringFieldUpdateOperationsInput;

    @Field(() => PlateFoodUpdateManyWithoutMenuNestedInput, {nullable:true})
    plateFood?: PlateFoodUpdateManyWithoutMenuNestedInput;

    @Field(() => CategoryUpdateManyWithoutMenuNestedInput, {nullable:true})
    category?: CategoryUpdateManyWithoutMenuNestedInput;
}
