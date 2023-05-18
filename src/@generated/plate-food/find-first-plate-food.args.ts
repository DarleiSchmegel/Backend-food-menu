import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlateFoodWhereInput } from './plate-food-where.input';
import { Type } from 'class-transformer';
import { PlateFoodOrderByWithRelationInput } from './plate-food-order-by-with-relation.input';
import { PlateFoodWhereUniqueInput } from './plate-food-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PlateFoodScalarFieldEnum } from './plate-food-scalar-field.enum';

@ArgsType()
export class FindFirstPlateFoodArgs {

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

    @Field(() => [PlateFoodScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PlateFoodScalarFieldEnum>;
}
