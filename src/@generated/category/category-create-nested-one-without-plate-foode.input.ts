import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutPlateFoodeInput } from './category-create-without-plate-foode.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutPlateFoodeInput } from './category-create-or-connect-without-plate-foode.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutPlateFoodeInput {

    @Field(() => CategoryCreateWithoutPlateFoodeInput, {nullable:true})
    @Type(() => CategoryCreateWithoutPlateFoodeInput)
    create?: CategoryCreateWithoutPlateFoodeInput;

    @Field(() => CategoryCreateOrConnectWithoutPlateFoodeInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutPlateFoodeInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutPlateFoodeInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;
}
