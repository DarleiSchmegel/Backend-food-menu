import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
// import { RestaurantCreateNestedOneWithoutManagerInput } from '../restaurant/restaurant-create-nested-one-without-manager.input';

import { UserCreateInput } from 'src/@generated/user/user-create.input';
@InputType()
export class CreateUserInput extends UserCreateInput {}
