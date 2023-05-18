import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PlateFoodListRelationFilter } from '../plate-food/plate-food-list-relation-filter.input';
import { MenuRelationFilter } from '../menu/menu-relation-filter.input';

@InputType()
export class CategoryWhereInput {

    @Field(() => [CategoryWhereInput], {nullable:true})
    AND?: Array<CategoryWhereInput>;

    @Field(() => [CategoryWhereInput], {nullable:true})
    OR?: Array<CategoryWhereInput>;

    @Field(() => [CategoryWhereInput], {nullable:true})
    NOT?: Array<CategoryWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    menuId?: IntFilter;

    @Field(() => PlateFoodListRelationFilter, {nullable:true})
    plateFoode?: PlateFoodListRelationFilter;

    @Field(() => MenuRelationFilter, {nullable:true})
    menu?: MenuRelationFilter;
}
