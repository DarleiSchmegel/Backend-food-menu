import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlateFoodWhereUniqueInput } from './plate-food-where-unique.input';
import { Type } from 'class-transformer';
import { PlateFoodUpdateWithoutCategoryInput } from './plate-food-update-without-category.input';
import { PlateFoodCreateWithoutCategoryInput } from './plate-food-create-without-category.input';

@InputType()
export class PlateFoodUpsertWithWhereUniqueWithoutCategoryInput {

    @Field(() => PlateFoodWhereUniqueInput, {nullable:false})
    @Type(() => PlateFoodWhereUniqueInput)
    where!: PlateFoodWhereUniqueInput;

    @Field(() => PlateFoodUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => PlateFoodUpdateWithoutCategoryInput)
    update!: PlateFoodUpdateWithoutCategoryInput;

    @Field(() => PlateFoodCreateWithoutCategoryInput, {nullable:false})
    @Type(() => PlateFoodCreateWithoutCategoryInput)
    create!: PlateFoodCreateWithoutCategoryInput;
}
