import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class PlateFoodScalarWhereWithAggregatesInput {

    @Field(() => [PlateFoodScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PlateFoodScalarWhereWithAggregatesInput>;

    @Field(() => [PlateFoodScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PlateFoodScalarWhereWithAggregatesInput>;

    @Field(() => [PlateFoodScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PlateFoodScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    ingredients?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    setupTime?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    image?: StringNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    menuId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    categoryId?: IntWithAggregatesFilter;
}
