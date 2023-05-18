import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutMenuInput } from './category-create-without-menu.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutMenuInput } from './category-create-or-connect-without-menu.input';
import { CategoryUpsertWithWhereUniqueWithoutMenuInput } from './category-upsert-with-where-unique-without-menu.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithWhereUniqueWithoutMenuInput } from './category-update-with-where-unique-without-menu.input';
import { CategoryUpdateManyWithWhereWithoutMenuInput } from './category-update-many-with-where-without-menu.input';
import { CategoryScalarWhereInput } from './category-scalar-where.input';

@InputType()
export class CategoryUpdateManyWithoutMenuNestedInput {

    @Field(() => [CategoryCreateWithoutMenuInput], {nullable:true})
    @Type(() => CategoryCreateWithoutMenuInput)
    create?: Array<CategoryCreateWithoutMenuInput>;

    @Field(() => [CategoryCreateOrConnectWithoutMenuInput], {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutMenuInput)
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutMenuInput>;

    @Field(() => [CategoryUpsertWithWhereUniqueWithoutMenuInput], {nullable:true})
    @Type(() => CategoryUpsertWithWhereUniqueWithoutMenuInput)
    upsert?: Array<CategoryUpsertWithWhereUniqueWithoutMenuInput>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    set?: Array<CategoryWhereUniqueInput>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    disconnect?: Array<CategoryWhereUniqueInput>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    delete?: Array<CategoryWhereUniqueInput>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Array<CategoryWhereUniqueInput>;

    @Field(() => [CategoryUpdateWithWhereUniqueWithoutMenuInput], {nullable:true})
    @Type(() => CategoryUpdateWithWhereUniqueWithoutMenuInput)
    update?: Array<CategoryUpdateWithWhereUniqueWithoutMenuInput>;

    @Field(() => [CategoryUpdateManyWithWhereWithoutMenuInput], {nullable:true})
    @Type(() => CategoryUpdateManyWithWhereWithoutMenuInput)
    updateMany?: Array<CategoryUpdateManyWithWhereWithoutMenuInput>;

    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    @Type(() => CategoryScalarWhereInput)
    deleteMany?: Array<CategoryScalarWhereInput>;
}
