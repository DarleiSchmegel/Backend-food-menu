import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { RestaurantUpdateOneRequiredWithoutMenuNestedInput } from '../restaurant/restaurant-update-one-required-without-menu-nested.input';
import { CategoryUpdateManyWithoutMenuNestedInput } from '../category/category-update-many-without-menu-nested.input';

@InputType()
export class MenuUpdateWithoutPlateFoodInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    banner?: NullableStringFieldUpdateOperationsInput;

    @Field(() => RestaurantUpdateOneRequiredWithoutMenuNestedInput, {nullable:true})
    restaurant?: RestaurantUpdateOneRequiredWithoutMenuNestedInput;

    @Field(() => CategoryUpdateManyWithoutMenuNestedInput, {nullable:true})
    category?: CategoryUpdateManyWithoutMenuNestedInput;
}
