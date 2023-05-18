import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CategoryUncheckedCreateNestedManyWithoutMenuInput } from '../category/category-unchecked-create-nested-many-without-menu.input';

@InputType()
export class MenuUncheckedCreateWithoutPlateFoodInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    banner?: string;

    @Field(() => Int, {nullable:false})
    restaurantId!: number;

    @Field(() => CategoryUncheckedCreateNestedManyWithoutMenuInput, {nullable:true})
    category?: CategoryUncheckedCreateNestedManyWithoutMenuInput;
}
