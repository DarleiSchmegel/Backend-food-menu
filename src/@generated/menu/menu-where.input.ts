import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { RestaurantRelationFilter } from '../restaurant/restaurant-relation-filter.input';
import { PlateFoodListRelationFilter } from '../plate-food/plate-food-list-relation-filter.input';
import { CategoryListRelationFilter } from '../category/category-list-relation-filter.input';

@InputType()
export class MenuWhereInput {

    @Field(() => [MenuWhereInput], {nullable:true})
    AND?: Array<MenuWhereInput>;

    @Field(() => [MenuWhereInput], {nullable:true})
    OR?: Array<MenuWhereInput>;

    @Field(() => [MenuWhereInput], {nullable:true})
    NOT?: Array<MenuWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    banner?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    restaurantId?: IntFilter;

    @Field(() => RestaurantRelationFilter, {nullable:true})
    restaurant?: RestaurantRelationFilter;

    @Field(() => PlateFoodListRelationFilter, {nullable:true})
    plateFood?: PlateFoodListRelationFilter;

    @Field(() => CategoryListRelationFilter, {nullable:true})
    category?: CategoryListRelationFilter;
}
