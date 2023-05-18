import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutPlateFoodeInput } from './category-create-without-plate-foode.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutPlateFoodeInput } from './category-create-or-connect-without-plate-foode.input';
import { CategoryUpsertWithoutPlateFoodeInput } from './category-upsert-without-plate-foode.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutPlateFoodeInput } from './category-update-without-plate-foode.input';

@InputType()
export class CategoryUpdateOneRequiredWithoutPlateFoodeNestedInput {

    @Field(() => CategoryCreateWithoutPlateFoodeInput, {nullable:true})
    @Type(() => CategoryCreateWithoutPlateFoodeInput)
    create?: CategoryCreateWithoutPlateFoodeInput;

    @Field(() => CategoryCreateOrConnectWithoutPlateFoodeInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutPlateFoodeInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutPlateFoodeInput;

    @Field(() => CategoryUpsertWithoutPlateFoodeInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutPlateFoodeInput)
    upsert?: CategoryUpsertWithoutPlateFoodeInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;

    @Field(() => CategoryUpdateWithoutPlateFoodeInput, {nullable:true})
    @Type(() => CategoryUpdateWithoutPlateFoodeInput)
    update?: CategoryUpdateWithoutPlateFoodeInput;
}
