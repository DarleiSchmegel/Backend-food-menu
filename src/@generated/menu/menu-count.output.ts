import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MenuCount {

    @Field(() => Int, {nullable:false})
    plateFood?: number;

    @Field(() => Int, {nullable:false})
    category?: number;
}
