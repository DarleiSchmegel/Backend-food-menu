import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlateFoodWhereUniqueInput } from './plate-food-where-unique.input';
import { Type } from 'class-transformer';
import { PlateFoodCreateWithoutMenuInput } from './plate-food-create-without-menu.input';

@InputType()
export class PlateFoodCreateOrConnectWithoutMenuInput {

    @Field(() => PlateFoodWhereUniqueInput, {nullable:false})
    @Type(() => PlateFoodWhereUniqueInput)
    where!: PlateFoodWhereUniqueInput;

    @Field(() => PlateFoodCreateWithoutMenuInput, {nullable:false})
    @Type(() => PlateFoodCreateWithoutMenuInput)
    create!: PlateFoodCreateWithoutMenuInput;
}
