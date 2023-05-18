import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MenuWhereUniqueInput } from './menu-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMenuArgs {

    @Field(() => MenuWhereUniqueInput, {nullable:false})
    @Type(() => MenuWhereUniqueInput)
    where!: MenuWhereUniqueInput;
}
