import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MenuCreateWithoutPlateFoodInput } from './menu-create-without-plate-food.input';
import { Type } from 'class-transformer';
import { MenuCreateOrConnectWithoutPlateFoodInput } from './menu-create-or-connect-without-plate-food.input';
import { MenuUpsertWithoutPlateFoodInput } from './menu-upsert-without-plate-food.input';
import { MenuWhereUniqueInput } from './menu-where-unique.input';
import { MenuUpdateWithoutPlateFoodInput } from './menu-update-without-plate-food.input';

@InputType()
export class MenuUpdateOneRequiredWithoutPlateFoodNestedInput {

    @Field(() => MenuCreateWithoutPlateFoodInput, {nullable:true})
    @Type(() => MenuCreateWithoutPlateFoodInput)
    create?: MenuCreateWithoutPlateFoodInput;

    @Field(() => MenuCreateOrConnectWithoutPlateFoodInput, {nullable:true})
    @Type(() => MenuCreateOrConnectWithoutPlateFoodInput)
    connectOrCreate?: MenuCreateOrConnectWithoutPlateFoodInput;

    @Field(() => MenuUpsertWithoutPlateFoodInput, {nullable:true})
    @Type(() => MenuUpsertWithoutPlateFoodInput)
    upsert?: MenuUpsertWithoutPlateFoodInput;

    @Field(() => MenuWhereUniqueInput, {nullable:true})
    @Type(() => MenuWhereUniqueInput)
    connect?: MenuWhereUniqueInput;

    @Field(() => MenuUpdateWithoutPlateFoodInput, {nullable:true})
    @Type(() => MenuUpdateWithoutPlateFoodInput)
    update?: MenuUpdateWithoutPlateFoodInput;
}
