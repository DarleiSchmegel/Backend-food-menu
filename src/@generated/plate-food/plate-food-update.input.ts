import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { MenuUpdateOneRequiredWithoutPlateFoodNestedInput } from '../menu/menu-update-one-required-without-plate-food-nested.input';
import { CategoryUpdateOneRequiredWithoutPlateFoodeNestedInput } from '../category/category-update-one-required-without-plate-foode-nested.input';

@InputType()
export class PlateFoodUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ingredients?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    setupTime?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    image?: NullableStringFieldUpdateOperationsInput;

    @Field(() => MenuUpdateOneRequiredWithoutPlateFoodNestedInput, {nullable:true})
    menu?: MenuUpdateOneRequiredWithoutPlateFoodNestedInput;

    @Field(() => CategoryUpdateOneRequiredWithoutPlateFoodeNestedInput, {nullable:true})
    category?: CategoryUpdateOneRequiredWithoutPlateFoodeNestedInput;
}
