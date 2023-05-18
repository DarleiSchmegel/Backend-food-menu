import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RestaurantCreateNestedOneWithoutMenuInput } from '../restaurant/restaurant-create-nested-one-without-menu.input';
import { PlateFoodCreateNestedManyWithoutMenuInput } from '../plate-food/plate-food-create-nested-many-without-menu.input';
import { CategoryCreateNestedManyWithoutMenuInput } from '../category/category-create-nested-many-without-menu.input';

@InputType()
export class MenuCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    banner?: string;

    @Field(() => RestaurantCreateNestedOneWithoutMenuInput, {nullable:false})
    restaurant!: RestaurantCreateNestedOneWithoutMenuInput;

    @Field(() => PlateFoodCreateNestedManyWithoutMenuInput, {nullable:true})
    plateFood?: PlateFoodCreateNestedManyWithoutMenuInput;

    @Field(() => CategoryCreateNestedManyWithoutMenuInput, {nullable:true})
    category?: CategoryCreateNestedManyWithoutMenuInput;
}
