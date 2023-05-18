import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class PlateFoodScalarWhereInput {

    @Field(() => [PlateFoodScalarWhereInput], {nullable:true})
    AND?: Array<PlateFoodScalarWhereInput>;

    @Field(() => [PlateFoodScalarWhereInput], {nullable:true})
    OR?: Array<PlateFoodScalarWhereInput>;

    @Field(() => [PlateFoodScalarWhereInput], {nullable:true})
    NOT?: Array<PlateFoodScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    ingredients?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    setupTime?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    image?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    menuId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    categoryId?: IntFilter;
}
