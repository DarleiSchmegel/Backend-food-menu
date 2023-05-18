import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MenuWhereInput } from './menu-where.input';
import { Type } from 'class-transformer';
import { MenuOrderByWithRelationInput } from './menu-order-by-with-relation.input';
import { MenuWhereUniqueInput } from './menu-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MenuCountAggregateInput } from './menu-count-aggregate.input';
import { MenuAvgAggregateInput } from './menu-avg-aggregate.input';
import { MenuSumAggregateInput } from './menu-sum-aggregate.input';
import { MenuMinAggregateInput } from './menu-min-aggregate.input';
import { MenuMaxAggregateInput } from './menu-max-aggregate.input';

@ArgsType()
export class MenuAggregateArgs {

    @Field(() => MenuWhereInput, {nullable:true})
    @Type(() => MenuWhereInput)
    where?: MenuWhereInput;

    @Field(() => [MenuOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MenuOrderByWithRelationInput>;

    @Field(() => MenuWhereUniqueInput, {nullable:true})
    cursor?: MenuWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MenuCountAggregateInput, {nullable:true})
    _count?: MenuCountAggregateInput;

    @Field(() => MenuAvgAggregateInput, {nullable:true})
    _avg?: MenuAvgAggregateInput;

    @Field(() => MenuSumAggregateInput, {nullable:true})
    _sum?: MenuSumAggregateInput;

    @Field(() => MenuMinAggregateInput, {nullable:true})
    _min?: MenuMinAggregateInput;

    @Field(() => MenuMaxAggregateInput, {nullable:true})
    _max?: MenuMaxAggregateInput;
}
