import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlateFoodWhereInput } from './plate-food-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPlateFoodArgs {

    @Field(() => PlateFoodWhereInput, {nullable:true})
    @Type(() => PlateFoodWhereInput)
    where?: PlateFoodWhereInput;
}
