import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class MenuScalarWhereWithAggregatesInput {

    @Field(() => [MenuScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MenuScalarWhereWithAggregatesInput>;

    @Field(() => [MenuScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MenuScalarWhereWithAggregatesInput>;

    @Field(() => [MenuScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MenuScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    banner?: StringNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    restaurantId?: IntWithAggregatesFilter;
}
