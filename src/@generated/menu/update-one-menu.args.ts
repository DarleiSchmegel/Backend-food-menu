import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MenuUpdateInput } from './menu-update.input';
import { Type } from 'class-transformer';
import { MenuWhereUniqueInput } from './menu-where-unique.input';

@ArgsType()
export class UpdateOneMenuArgs {

    @Field(() => MenuUpdateInput, {nullable:false})
    @Type(() => MenuUpdateInput)
    data!: MenuUpdateInput;

    @Field(() => MenuWhereUniqueInput, {nullable:false})
    @Type(() => MenuWhereUniqueInput)
    where!: MenuWhereUniqueInput;
}
