import { InputType } from '@nestjs/graphql';
import { RestaurantCreateInput } from 'src/@generated/restaurant/restaurant-create.input';

@InputType()
export class CreateRestaurantInput extends RestaurantCreateInput {}
