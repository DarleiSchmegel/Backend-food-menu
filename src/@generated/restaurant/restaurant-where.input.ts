import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { MenuRelationFilter } from '../menu/menu-relation-filter.input';

@InputType()
export class RestaurantWhereInput {

    @Field(() => [RestaurantWhereInput], {nullable:true})
    AND?: Array<RestaurantWhereInput>;

    @Field(() => [RestaurantWhereInput], {nullable:true})
    OR?: Array<RestaurantWhereInput>;

    @Field(() => [RestaurantWhereInput], {nullable:true})
    NOT?: Array<RestaurantWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    banner?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    fone?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    address?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    openingHours?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    managerId?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    manager?: UserRelationFilter;

    @Field(() => MenuRelationFilter, {nullable:true})
    menu?: MenuRelationFilter;
}
