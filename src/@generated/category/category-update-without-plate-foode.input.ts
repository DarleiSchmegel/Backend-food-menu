import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MenuUpdateOneRequiredWithoutCategoryNestedInput } from '../menu/menu-update-one-required-without-category-nested.input';

@InputType()
export class CategoryUpdateWithoutPlateFoodeInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => MenuUpdateOneRequiredWithoutCategoryNestedInput, {nullable:true})
    menu?: MenuUpdateOneRequiredWithoutCategoryNestedInput;
}
