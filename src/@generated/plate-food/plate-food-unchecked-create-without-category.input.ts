import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PlateFoodUncheckedCreateWithoutCategoryInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    ingredients!: string;

    @Field(() => String, {nullable:false})
    setupTime!: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => Int, {nullable:false})
    menuId!: number;
}
