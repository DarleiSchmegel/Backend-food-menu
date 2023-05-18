import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlateFoodWhereUniqueInput } from './plate-food-where-unique.input';
import { Type } from 'class-transformer';
import { PlateFoodUpdateWithoutCategoryInput } from './plate-food-update-without-category.input';

@InputType()
export class PlateFoodUpdateWithWhereUniqueWithoutCategoryInput {

    @Field(() => PlateFoodWhereUniqueInput, {nullable:false})
    @Type(() => PlateFoodWhereUniqueInput)
    where!: PlateFoodWhereUniqueInput;

    @Field(() => PlateFoodUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => PlateFoodUpdateWithoutCategoryInput)
    data!: PlateFoodUpdateWithoutCategoryInput;
}
