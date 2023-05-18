import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlateFoodCreateWithoutCategoryInput } from './plate-food-create-without-category.input';
import { Type } from 'class-transformer';
import { PlateFoodCreateOrConnectWithoutCategoryInput } from './plate-food-create-or-connect-without-category.input';
import { PlateFoodUpsertWithWhereUniqueWithoutCategoryInput } from './plate-food-upsert-with-where-unique-without-category.input';
import { PlateFoodWhereUniqueInput } from './plate-food-where-unique.input';
import { PlateFoodUpdateWithWhereUniqueWithoutCategoryInput } from './plate-food-update-with-where-unique-without-category.input';
import { PlateFoodUpdateManyWithWhereWithoutCategoryInput } from './plate-food-update-many-with-where-without-category.input';
import { PlateFoodScalarWhereInput } from './plate-food-scalar-where.input';

@InputType()
export class PlateFoodUncheckedUpdateManyWithoutCategoryNestedInput {

    @Field(() => [PlateFoodCreateWithoutCategoryInput], {nullable:true})
    @Type(() => PlateFoodCreateWithoutCategoryInput)
    create?: Array<PlateFoodCreateWithoutCategoryInput>;

    @Field(() => [PlateFoodCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => PlateFoodCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<PlateFoodCreateOrConnectWithoutCategoryInput>;

    @Field(() => [PlateFoodUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => PlateFoodUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<PlateFoodUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [PlateFoodWhereUniqueInput], {nullable:true})
    @Type(() => PlateFoodWhereUniqueInput)
    set?: Array<PlateFoodWhereUniqueInput>;

    @Field(() => [PlateFoodWhereUniqueInput], {nullable:true})
    @Type(() => PlateFoodWhereUniqueInput)
    disconnect?: Array<PlateFoodWhereUniqueInput>;

    @Field(() => [PlateFoodWhereUniqueInput], {nullable:true})
    @Type(() => PlateFoodWhereUniqueInput)
    delete?: Array<PlateFoodWhereUniqueInput>;

    @Field(() => [PlateFoodWhereUniqueInput], {nullable:true})
    @Type(() => PlateFoodWhereUniqueInput)
    connect?: Array<PlateFoodWhereUniqueInput>;

    @Field(() => [PlateFoodUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => PlateFoodUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<PlateFoodUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [PlateFoodUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => PlateFoodUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<PlateFoodUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [PlateFoodScalarWhereInput], {nullable:true})
    @Type(() => PlateFoodScalarWhereInput)
    deleteMany?: Array<PlateFoodScalarWhereInput>;
}
