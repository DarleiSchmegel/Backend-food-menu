import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlateFoodWhereUniqueInput } from './plate-food-where-unique.input';
import { Type } from 'class-transformer';
import { PlateFoodCreateInput } from './plate-food-create.input';
import { PlateFoodUpdateInput } from './plate-food-update.input';

@ArgsType()
export class UpsertOnePlateFoodArgs {

    @Field(() => PlateFoodWhereUniqueInput, {nullable:false})
    @Type(() => PlateFoodWhereUniqueInput)
    where!: PlateFoodWhereUniqueInput;

    @Field(() => PlateFoodCreateInput, {nullable:false})
    @Type(() => PlateFoodCreateInput)
    create!: PlateFoodCreateInput;

    @Field(() => PlateFoodUpdateInput, {nullable:false})
    @Type(() => PlateFoodUpdateInput)
    update!: PlateFoodUpdateInput;
}
