import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RestaurantOrderByWithRelationInput } from '../restaurant/restaurant-order-by-with-relation.input';
import { PlateFoodOrderByRelationAggregateInput } from '../plate-food/plate-food-order-by-relation-aggregate.input';
import { CategoryOrderByRelationAggregateInput } from '../category/category-order-by-relation-aggregate.input';

@InputType()
export class MenuOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    banner?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    restaurantId?: keyof typeof SortOrder;

    @Field(() => RestaurantOrderByWithRelationInput, {nullable:true})
    restaurant?: RestaurantOrderByWithRelationInput;

    @Field(() => PlateFoodOrderByRelationAggregateInput, {nullable:true})
    plateFood?: PlateFoodOrderByRelationAggregateInput;

    @Field(() => CategoryOrderByRelationAggregateInput, {nullable:true})
    category?: CategoryOrderByRelationAggregateInput;
}
