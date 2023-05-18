import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PlateFoodCountOrderByAggregateInput } from './plate-food-count-order-by-aggregate.input';
import { PlateFoodAvgOrderByAggregateInput } from './plate-food-avg-order-by-aggregate.input';
import { PlateFoodMaxOrderByAggregateInput } from './plate-food-max-order-by-aggregate.input';
import { PlateFoodMinOrderByAggregateInput } from './plate-food-min-order-by-aggregate.input';
import { PlateFoodSumOrderByAggregateInput } from './plate-food-sum-order-by-aggregate.input';

@InputType()
export class PlateFoodOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ingredients?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    setupTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    menuId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;

    @Field(() => PlateFoodCountOrderByAggregateInput, {nullable:true})
    _count?: PlateFoodCountOrderByAggregateInput;

    @Field(() => PlateFoodAvgOrderByAggregateInput, {nullable:true})
    _avg?: PlateFoodAvgOrderByAggregateInput;

    @Field(() => PlateFoodMaxOrderByAggregateInput, {nullable:true})
    _max?: PlateFoodMaxOrderByAggregateInput;

    @Field(() => PlateFoodMinOrderByAggregateInput, {nullable:true})
    _min?: PlateFoodMinOrderByAggregateInput;

    @Field(() => PlateFoodSumOrderByAggregateInput, {nullable:true})
    _sum?: PlateFoodSumOrderByAggregateInput;
}
