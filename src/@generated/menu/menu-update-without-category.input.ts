import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { RestaurantUpdateOneRequiredWithoutMenuNestedInput } from '../restaurant/restaurant-update-one-required-without-menu-nested.input';
import { PlateFoodUpdateManyWithoutMenuNestedInput } from '../plate-food/plate-food-update-many-without-menu-nested.input';

@InputType()
export class MenuUpdateWithoutCategoryInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    banner?: NullableStringFieldUpdateOperationsInput;

    @Field(() => RestaurantUpdateOneRequiredWithoutMenuNestedInput, {nullable:true})
    restaurant?: RestaurantUpdateOneRequiredWithoutMenuNestedInput;

    @Field(() => PlateFoodUpdateManyWithoutMenuNestedInput, {nullable:true})
    plateFood?: PlateFoodUpdateManyWithoutMenuNestedInput;
}
