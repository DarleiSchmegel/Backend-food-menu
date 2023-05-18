import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutMenuInput } from './category-create-without-menu.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutMenuInput } from './category-create-or-connect-without-menu.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryUncheckedCreateNestedManyWithoutMenuInput {

    @Field(() => [CategoryCreateWithoutMenuInput], {nullable:true})
    @Type(() => CategoryCreateWithoutMenuInput)
    create?: Array<CategoryCreateWithoutMenuInput>;

    @Field(() => [CategoryCreateOrConnectWithoutMenuInput], {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutMenuInput)
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutMenuInput>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Array<CategoryWhereUniqueInput>;
}
