import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlateFoodUpdateInput } from './plate-food-update.input';
import { Type } from 'class-transformer';
import { PlateFoodWhereUniqueInput } from './plate-food-where-unique.input';

@ArgsType()
export class UpdateOnePlateFoodArgs {

    @Field(() => PlateFoodUpdateInput, {nullable:false})
    @Type(() => PlateFoodUpdateInput)
    data!: PlateFoodUpdateInput;

    @Field(() => PlateFoodWhereUniqueInput, {nullable:false})
    @Type(() => PlateFoodWhereUniqueInput)
    where!: PlateFoodWhereUniqueInput;
}
