import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MenuOrderByWithRelationInput } from '../menu/menu-order-by-with-relation.input';
import { CategoryOrderByWithRelationInput } from '../category/category-order-by-with-relation.input';

@InputType()
export class PlateFoodOrderByWithRelationInput {

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

    @Field(() => MenuOrderByWithRelationInput, {nullable:true})
    menu?: MenuOrderByWithRelationInput;

    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    category?: CategoryOrderByWithRelationInput;
}
