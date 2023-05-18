import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PlateFoodOrderByRelationAggregateInput } from '../plate-food/plate-food-order-by-relation-aggregate.input';
import { MenuOrderByWithRelationInput } from '../menu/menu-order-by-with-relation.input';

@InputType()
export class CategoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    menuId?: keyof typeof SortOrder;

    @Field(() => PlateFoodOrderByRelationAggregateInput, {nullable:true})
    plateFoode?: PlateFoodOrderByRelationAggregateInput;

    @Field(() => MenuOrderByWithRelationInput, {nullable:true})
    menu?: MenuOrderByWithRelationInput;
}
