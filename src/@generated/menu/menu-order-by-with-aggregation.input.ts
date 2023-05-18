import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MenuCountOrderByAggregateInput } from './menu-count-order-by-aggregate.input';
import { MenuAvgOrderByAggregateInput } from './menu-avg-order-by-aggregate.input';
import { MenuMaxOrderByAggregateInput } from './menu-max-order-by-aggregate.input';
import { MenuMinOrderByAggregateInput } from './menu-min-order-by-aggregate.input';
import { MenuSumOrderByAggregateInput } from './menu-sum-order-by-aggregate.input';

@InputType()
export class MenuOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    banner?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    restaurantId?: keyof typeof SortOrder;

    @Field(() => MenuCountOrderByAggregateInput, {nullable:true})
    _count?: MenuCountOrderByAggregateInput;

    @Field(() => MenuAvgOrderByAggregateInput, {nullable:true})
    _avg?: MenuAvgOrderByAggregateInput;

    @Field(() => MenuMaxOrderByAggregateInput, {nullable:true})
    _max?: MenuMaxOrderByAggregateInput;

    @Field(() => MenuMinOrderByAggregateInput, {nullable:true})
    _min?: MenuMinOrderByAggregateInput;

    @Field(() => MenuSumOrderByAggregateInput, {nullable:true})
    _sum?: MenuSumOrderByAggregateInput;
}
