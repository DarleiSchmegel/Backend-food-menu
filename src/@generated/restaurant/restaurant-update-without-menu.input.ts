import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutRestaurantNestedInput } from '../user/user-update-one-required-without-restaurant-nested.input';

@InputType()
export class RestaurantUpdateWithoutMenuInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    banner?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    fone?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    address?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    openingHours?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutRestaurantNestedInput, {nullable:true})
    manager?: UserUpdateOneRequiredWithoutRestaurantNestedInput;
}
