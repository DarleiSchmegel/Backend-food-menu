import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlateFoodUpdateManyMutationInput } from './plate-food-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PlateFoodWhereInput } from './plate-food-where.input';

@ArgsType()
export class UpdateManyPlateFoodArgs {

    @Field(() => PlateFoodUpdateManyMutationInput, {nullable:false})
    @Type(() => PlateFoodUpdateManyMutationInput)
    data!: PlateFoodUpdateManyMutationInput;

    @Field(() => PlateFoodWhereInput, {nullable:true})
    @Type(() => PlateFoodWhereInput)
    where?: PlateFoodWhereInput;
}
