import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlateFoodWhereInput } from './plate-food-where.input';

@InputType()
export class PlateFoodListRelationFilter {

    @Field(() => PlateFoodWhereInput, {nullable:true})
    every?: PlateFoodWhereInput;

    @Field(() => PlateFoodWhereInput, {nullable:true})
    some?: PlateFoodWhereInput;

    @Field(() => PlateFoodWhereInput, {nullable:true})
    none?: PlateFoodWhereInput;
}
