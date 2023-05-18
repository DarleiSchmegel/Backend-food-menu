import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlateFoodCreateWithoutCategoryInput } from './plate-food-create-without-category.input';
import { Type } from 'class-transformer';
import { PlateFoodCreateOrConnectWithoutCategoryInput } from './plate-food-create-or-connect-without-category.input';
import { PlateFoodWhereUniqueInput } from './plate-food-where-unique.input';

@InputType()
export class PlateFoodUncheckedCreateNestedManyWithoutCategoryInput {

    @Field(() => [PlateFoodCreateWithoutCategoryInput], {nullable:true})
    @Type(() => PlateFoodCreateWithoutCategoryInput)
    create?: Array<PlateFoodCreateWithoutCategoryInput>;

    @Field(() => [PlateFoodCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => PlateFoodCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<PlateFoodCreateOrConnectWithoutCategoryInput>;

    @Field(() => [PlateFoodWhereUniqueInput], {nullable:true})
    @Type(() => PlateFoodWhereUniqueInput)
    connect?: Array<PlateFoodWhereUniqueInput>;
}
