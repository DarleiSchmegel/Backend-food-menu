import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MenuCountAggregate } from './menu-count-aggregate.output';
import { MenuAvgAggregate } from './menu-avg-aggregate.output';
import { MenuSumAggregate } from './menu-sum-aggregate.output';
import { MenuMinAggregate } from './menu-min-aggregate.output';
import { MenuMaxAggregate } from './menu-max-aggregate.output';

@ObjectType()
export class MenuGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    banner?: string;

    @Field(() => Int, {nullable:false})
    restaurantId!: number;

    @Field(() => MenuCountAggregate, {nullable:true})
    _count?: MenuCountAggregate;

    @Field(() => MenuAvgAggregate, {nullable:true})
    _avg?: MenuAvgAggregate;

    @Field(() => MenuSumAggregate, {nullable:true})
    _sum?: MenuSumAggregate;

    @Field(() => MenuMinAggregate, {nullable:true})
    _min?: MenuMinAggregate;

    @Field(() => MenuMaxAggregate, {nullable:true})
    _max?: MenuMaxAggregate;
}
