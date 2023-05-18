import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PlateFoodUpdateManyWithoutCategoryNestedInput } from '../plate-food/plate-food-update-many-without-category-nested.input';
import { MenuUpdateOneRequiredWithoutCategoryNestedInput } from '../menu/menu-update-one-required-without-category-nested.input';

@InputType()
export class CategoryUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => PlateFoodUpdateManyWithoutCategoryNestedInput, {nullable:true})
    plateFoode?: PlateFoodUpdateManyWithoutCategoryNestedInput;

    @Field(() => MenuUpdateOneRequiredWithoutCategoryNestedInput, {nullable:true})
    menu?: MenuUpdateOneRequiredWithoutCategoryNestedInput;
}
