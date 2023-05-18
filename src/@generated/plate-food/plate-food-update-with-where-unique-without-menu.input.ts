import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlateFoodWhereUniqueInput } from './plate-food-where-unique.input';
import { Type } from 'class-transformer';
import { PlateFoodUpdateWithoutMenuInput } from './plate-food-update-without-menu.input';

@InputType()
export class PlateFoodUpdateWithWhereUniqueWithoutMenuInput {

    @Field(() => PlateFoodWhereUniqueInput, {nullable:false})
    @Type(() => PlateFoodWhereUniqueInput)
    where!: PlateFoodWhereUniqueInput;

    @Field(() => PlateFoodUpdateWithoutMenuInput, {nullable:false})
    @Type(() => PlateFoodUpdateWithoutMenuInput)
    data!: PlateFoodUpdateWithoutMenuInput;
}
