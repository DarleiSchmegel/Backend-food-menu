import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { MenuRelationFilter } from '../menu/menu-relation-filter.input';
import { CategoryRelationFilter } from '../category/category-relation-filter.input';

@InputType()
export class PlateFoodWhereInput {

    @Field(() => [PlateFoodWhereInput], {nullable:true})
    AND?: Array<PlateFoodWhereInput>;

    @Field(() => [PlateFoodWhereInput], {nullable:true})
    OR?: Array<PlateFoodWhereInput>;

    @Field(() => [PlateFoodWhereInput], {nullable:true})
    NOT?: Array<PlateFoodWhereInput>;

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

    @Field(() => MenuRelationFilter, {nullable:true})
    menu?: MenuRelationFilter;

    @Field(() => CategoryRelationFilter, {nullable:true})
    category?: CategoryRelationFilter;
}
