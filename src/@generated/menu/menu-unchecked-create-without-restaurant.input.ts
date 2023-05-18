import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PlateFoodUncheckedCreateNestedManyWithoutMenuInput } from '../plate-food/plate-food-unchecked-create-nested-many-without-menu.input';
import { CategoryUncheckedCreateNestedManyWithoutMenuInput } from '../category/category-unchecked-create-nested-many-without-menu.input';

@InputType()
export class MenuUncheckedCreateWithoutRestaurantInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    banner?: string;

    @Field(() => PlateFoodUncheckedCreateNestedManyWithoutMenuInput, {nullable:true})
    plateFood?: PlateFoodUncheckedCreateNestedManyWithoutMenuInput;

    @Field(() => CategoryUncheckedCreateNestedManyWithoutMenuInput, {nullable:true})
    category?: CategoryUncheckedCreateNestedManyWithoutMenuInput;
}
