import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlateFoodCreateNestedManyWithoutMenuInput } from '../plate-food/plate-food-create-nested-many-without-menu.input';
import { CategoryCreateNestedManyWithoutMenuInput } from '../category/category-create-nested-many-without-menu.input';

@InputType()
export class MenuCreateWithoutRestaurantInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    banner?: string;

    @Field(() => PlateFoodCreateNestedManyWithoutMenuInput, {nullable:true})
    plateFood?: PlateFoodCreateNestedManyWithoutMenuInput;

    @Field(() => CategoryCreateNestedManyWithoutMenuInput, {nullable:true})
    category?: CategoryCreateNestedManyWithoutMenuInput;
}
