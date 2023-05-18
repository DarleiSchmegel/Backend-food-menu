import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlateFoodWhereUniqueInput } from './plate-food-where-unique.input';
import { Type } from 'class-transformer';
import { PlateFoodCreateWithoutCategoryInput } from './plate-food-create-without-category.input';

@InputType()
export class PlateFoodCreateOrConnectWithoutCategoryInput {

    @Field(() => PlateFoodWhereUniqueInput, {nullable:false})
    @Type(() => PlateFoodWhereUniqueInput)
    where!: PlateFoodWhereUniqueInput;

    @Field(() => PlateFoodCreateWithoutCategoryInput, {nullable:false})
    @Type(() => PlateFoodCreateWithoutCategoryInput)
    create!: PlateFoodCreateWithoutCategoryInput;
}
