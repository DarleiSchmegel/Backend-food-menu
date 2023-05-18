import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutMenuInput } from './category-create-without-menu.input';

@InputType()
export class CategoryCreateOrConnectWithoutMenuInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateWithoutMenuInput, {nullable:false})
    @Type(() => CategoryCreateWithoutMenuInput)
    create!: CategoryCreateWithoutMenuInput;
}
