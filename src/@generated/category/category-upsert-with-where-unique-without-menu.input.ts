import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryUpdateWithoutMenuInput } from './category-update-without-menu.input';
import { CategoryCreateWithoutMenuInput } from './category-create-without-menu.input';

@InputType()
export class CategoryUpsertWithWhereUniqueWithoutMenuInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryUpdateWithoutMenuInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutMenuInput)
    update!: CategoryUpdateWithoutMenuInput;

    @Field(() => CategoryCreateWithoutMenuInput, {nullable:false})
    @Type(() => CategoryCreateWithoutMenuInput)
    create!: CategoryCreateWithoutMenuInput;
}
