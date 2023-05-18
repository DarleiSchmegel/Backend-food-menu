import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { MenuOrderByWithRelationInput } from '../menu/menu-order-by-with-relation.input';

@InputType()
export class RestaurantOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    banner?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    openingHours?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    managerId?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    manager?: UserOrderByWithRelationInput;

    @Field(() => MenuOrderByWithRelationInput, {nullable:true})
    menu?: MenuOrderByWithRelationInput;
}
