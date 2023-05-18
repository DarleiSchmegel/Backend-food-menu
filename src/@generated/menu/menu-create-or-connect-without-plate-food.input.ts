import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuWhereUniqueInput } from './menu-where-unique.input';
import { Type } from 'class-transformer';
import { MenuCreateWithoutPlateFoodInput } from './menu-create-without-plate-food.input';

@InputType()
export class MenuCreateOrConnectWithoutPlateFoodInput {

    @Field(() => MenuWhereUniqueInput, {nullable:false})
    @Type(() => MenuWhereUniqueInput)
    where!: MenuWhereUniqueInput;

    @Field(() => MenuCreateWithoutPlateFoodInput, {nullable:false})
    @Type(() => MenuCreateWithoutPlateFoodInput)
    create!: MenuCreateWithoutPlateFoodInput;
}
