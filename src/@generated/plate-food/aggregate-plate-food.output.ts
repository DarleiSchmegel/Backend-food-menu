import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PlateFoodCountAggregate } from './plate-food-count-aggregate.output';
import { PlateFoodAvgAggregate } from './plate-food-avg-aggregate.output';
import { PlateFoodSumAggregate } from './plate-food-sum-aggregate.output';
import { PlateFoodMinAggregate } from './plate-food-min-aggregate.output';
import { PlateFoodMaxAggregate } from './plate-food-max-aggregate.output';

@ObjectType()
export class AggregatePlateFood {

    @Field(() => PlateFoodCountAggregate, {nullable:true})
    _count?: PlateFoodCountAggregate;

    @Field(() => PlateFoodAvgAggregate, {nullable:true})
    _avg?: PlateFoodAvgAggregate;

    @Field(() => PlateFoodSumAggregate, {nullable:true})
    _sum?: PlateFoodSumAggregate;

    @Field(() => PlateFoodMinAggregate, {nullable:true})
    _min?: PlateFoodMinAggregate;

    @Field(() => PlateFoodMaxAggregate, {nullable:true})
    _max?: PlateFoodMaxAggregate;
}
