import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlateFoodScalarWhereInput } from './plate-food-scalar-where.input';
import { Type } from 'class-transformer';
import { PlateFoodUpdateManyMutationInput } from './plate-food-update-many-mutation.input';

@InputType()
export class PlateFoodUpdateManyWithWhereWithoutMenuInput {

    @Field(() => PlateFoodScalarWhereInput, {nullable:false})
    @Type(() => PlateFoodScalarWhereInput)
    where!: PlateFoodScalarWhereInput;

    @Field(() => PlateFoodUpdateManyMutationInput, {nullable:false})
    @Type(() => PlateFoodUpdateManyMutationInput)
    data!: PlateFoodUpdateManyMutationInput;
}
