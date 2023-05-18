import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlateFoodCreateInput } from './plate-food-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePlateFoodArgs {

    @Field(() => PlateFoodCreateInput, {nullable:false})
    @Type(() => PlateFoodCreateInput)
    data!: PlateFoodCreateInput;
}
