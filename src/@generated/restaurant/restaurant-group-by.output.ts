import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RestaurantCountAggregate } from './restaurant-count-aggregate.output';
import { RestaurantAvgAggregate } from './restaurant-avg-aggregate.output';
import { RestaurantSumAggregate } from './restaurant-sum-aggregate.output';
import { RestaurantMinAggregate } from './restaurant-min-aggregate.output';
import { RestaurantMaxAggregate } from './restaurant-max-aggregate.output';

@ObjectType()
export class RestaurantGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    banner?: string;

    @Field(() => String, {nullable:true})
    fone?: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:true})
    openingHours?: string;

    @Field(() => Int, {nullable:false})
    managerId!: number;

    @Field(() => RestaurantCountAggregate, {nullable:true})
    _count?: RestaurantCountAggregate;

    @Field(() => RestaurantAvgAggregate, {nullable:true})
    _avg?: RestaurantAvgAggregate;

    @Field(() => RestaurantSumAggregate, {nullable:true})
    _sum?: RestaurantSumAggregate;

    @Field(() => RestaurantMinAggregate, {nullable:true})
    _min?: RestaurantMinAggregate;

    @Field(() => RestaurantMaxAggregate, {nullable:true})
    _max?: RestaurantMaxAggregate;
}
