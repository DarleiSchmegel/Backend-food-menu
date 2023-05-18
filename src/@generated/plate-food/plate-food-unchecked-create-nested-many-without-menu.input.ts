import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlateFoodCreateWithoutMenuInput } from './plate-food-create-without-menu.input';
import { Type } from 'class-transformer';
import { PlateFoodCreateOrConnectWithoutMenuInput } from './plate-food-create-or-connect-without-menu.input';
import { PlateFoodWhereUniqueInput } from './plate-food-where-unique.input';

@InputType()
export class PlateFoodUncheckedCreateNestedManyWithoutMenuInput {

    @Field(() => [PlateFoodCreateWithoutMenuInput], {nullable:true})
    @Type(() => PlateFoodCreateWithoutMenuInput)
    create?: Array<PlateFoodCreateWithoutMenuInput>;

    @Field(() => [PlateFoodCreateOrConnectWithoutMenuInput], {nullable:true})
    @Type(() => PlateFoodCreateOrConnectWithoutMenuInput)
    connectOrCreate?: Array<PlateFoodCreateOrConnectWithoutMenuInput>;

    @Field(() => [PlateFoodWhereUniqueInput], {nullable:true})
    @Type(() => PlateFoodWhereUniqueInput)
    connect?: Array<PlateFoodWhereUniqueInput>;
}
