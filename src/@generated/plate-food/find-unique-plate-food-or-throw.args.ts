import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlateFoodWhereUniqueInput } from './plate-food-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePlateFoodOrThrowArgs {

    @Field(() => PlateFoodWhereUniqueInput, {nullable:false})
    @Type(() => PlateFoodWhereUniqueInput)
    where!: PlateFoodWhereUniqueInput;
}
