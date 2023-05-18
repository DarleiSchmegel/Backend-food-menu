import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutPlateFoodeInput } from './category-create-without-plate-foode.input';

@InputType()
export class CategoryCreateOrConnectWithoutPlateFoodeInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateWithoutPlateFoodeInput, {nullable:false})
    @Type(() => CategoryCreateWithoutPlateFoodeInput)
    create!: CategoryCreateWithoutPlateFoodeInput;
}
