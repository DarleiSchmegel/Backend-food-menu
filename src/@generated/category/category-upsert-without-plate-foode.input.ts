import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutPlateFoodeInput } from './category-update-without-plate-foode.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutPlateFoodeInput } from './category-create-without-plate-foode.input';

@InputType()
export class CategoryUpsertWithoutPlateFoodeInput {

    @Field(() => CategoryUpdateWithoutPlateFoodeInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutPlateFoodeInput)
    update!: CategoryUpdateWithoutPlateFoodeInput;

    @Field(() => CategoryCreateWithoutPlateFoodeInput, {nullable:false})
    @Type(() => CategoryCreateWithoutPlateFoodeInput)
    create!: CategoryCreateWithoutPlateFoodeInput;
}
