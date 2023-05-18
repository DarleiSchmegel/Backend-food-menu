import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlateFoodWhereInput } from './plate-food-where.input';
import { Type } from 'class-transformer';
import { PlateFoodOrderByWithRelationInput } from './plate-food-order-by-with-relation.input';
import { PlateFoodWhereUniqueInput } from './plate-food-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PlateFoodCountAggregateInput } from './plate-food-count-aggregate.input';
import { PlateFoodAvgAggregateInput } from './plate-food-avg-aggregate.input';
import { PlateFoodSumAggregateInput } from './plate-food-sum-aggregate.input';
import { PlateFoodMinAggregateInput } from './plate-food-min-aggregate.input';
import { PlateFoodMaxAggregateInput } from './plate-food-max-aggregate.input';

@ArgsType()
export class PlateFoodAggregateArgs {

    @Field(() => PlateFoodWhereInput, {nullable:true})
    @Type(() => PlateFoodWhereInput)
    where?: PlateFoodWhereInput;

    @Field(() => [PlateFoodOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PlateFoodOrderByWithRelationInput>;

    @Field(() => PlateFoodWhereUniqueInput, {nullable:true})
    cursor?: PlateFoodWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PlateFoodCountAggregateInput, {nullable:true})
    _count?: PlateFoodCountAggregateInput;

    @Field(() => PlateFoodAvgAggregateInput, {nullable:true})
    _avg?: PlateFoodAvgAggregateInput;

    @Field(() => PlateFoodSumAggregateInput, {nullable:true})
    _sum?: PlateFoodSumAggregateInput;

    @Field(() => PlateFoodMinAggregateInput, {nullable:true})
    _min?: PlateFoodMinAggregateInput;

    @Field(() => PlateFoodMaxAggregateInput, {nullable:true})
    _max?: PlateFoodMaxAggregateInput;
}
