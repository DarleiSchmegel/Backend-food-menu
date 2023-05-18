import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuCreateWithoutPlateFoodInput } from './menu-create-without-plate-food.input';
import { Type } from 'class-transformer';
import { MenuCreateOrConnectWithoutPlateFoodInput } from './menu-create-or-connect-without-plate-food.input';
import { MenuWhereUniqueInput } from './menu-where-unique.input';

@InputType()
export class MenuCreateNestedOneWithoutPlateFoodInput {

    @Field(() => MenuCreateWithoutPlateFoodInput, {nullable:true})
    @Type(() => MenuCreateWithoutPlateFoodInput)
    create?: MenuCreateWithoutPlateFoodInput;

    @Field(() => MenuCreateOrConnectWithoutPlateFoodInput, {nullable:true})
    @Type(() => MenuCreateOrConnectWithoutPlateFoodInput)
    connectOrCreate?: MenuCreateOrConnectWithoutPlateFoodInput;

    @Field(() => MenuWhereUniqueInput, {nullable:true})
    @Type(() => MenuWhereUniqueInput)
    connect?: MenuWhereUniqueInput;
}
