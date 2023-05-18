import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlateFoodCreateWithoutMenuInput } from './plate-food-create-without-menu.input';
import { Type } from 'class-transformer';
import { PlateFoodCreateOrConnectWithoutMenuInput } from './plate-food-create-or-connect-without-menu.input';
import { PlateFoodUpsertWithWhereUniqueWithoutMenuInput } from './plate-food-upsert-with-where-unique-without-menu.input';
import { PlateFoodWhereUniqueInput } from './plate-food-where-unique.input';
import { PlateFoodUpdateWithWhereUniqueWithoutMenuInput } from './plate-food-update-with-where-unique-without-menu.input';
import { PlateFoodUpdateManyWithWhereWithoutMenuInput } from './plate-food-update-many-with-where-without-menu.input';
import { PlateFoodScalarWhereInput } from './plate-food-scalar-where.input';

@InputType()
export class PlateFoodUpdateManyWithoutMenuNestedInput {

    @Field(() => [PlateFoodCreateWithoutMenuInput], {nullable:true})
    @Type(() => PlateFoodCreateWithoutMenuInput)
    create?: Array<PlateFoodCreateWithoutMenuInput>;

    @Field(() => [PlateFoodCreateOrConnectWithoutMenuInput], {nullable:true})
    @Type(() => PlateFoodCreateOrConnectWithoutMenuInput)
    connectOrCreate?: Array<PlateFoodCreateOrConnectWithoutMenuInput>;

    @Field(() => [PlateFoodUpsertWithWhereUniqueWithoutMenuInput], {nullable:true})
    @Type(() => PlateFoodUpsertWithWhereUniqueWithoutMenuInput)
    upsert?: Array<PlateFoodUpsertWithWhereUniqueWithoutMenuInput>;

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

    @Field(() => [PlateFoodUpdateWithWhereUniqueWithoutMenuInput], {nullable:true})
    @Type(() => PlateFoodUpdateWithWhereUniqueWithoutMenuInput)
    update?: Array<PlateFoodUpdateWithWhereUniqueWithoutMenuInput>;

    @Field(() => [PlateFoodUpdateManyWithWhereWithoutMenuInput], {nullable:true})
    @Type(() => PlateFoodUpdateManyWithWhereWithoutMenuInput)
    updateMany?: Array<PlateFoodUpdateManyWithWhereWithoutMenuInput>;

    @Field(() => [PlateFoodScalarWhereInput], {nullable:true})
    @Type(() => PlateFoodScalarWhereInput)
    deleteMany?: Array<PlateFoodScalarWhereInput>;
}
