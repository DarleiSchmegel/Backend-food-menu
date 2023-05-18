import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class RestaurantScalarWhereWithAggregatesInput {

    @Field(() => [RestaurantScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RestaurantScalarWhereWithAggregatesInput>;

    @Field(() => [RestaurantScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RestaurantScalarWhereWithAggregatesInput>;

    @Field(() => [RestaurantScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RestaurantScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    banner?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    fone?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    address?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    openingHours?: StringNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    managerId?: IntWithAggregatesFilter;
}
