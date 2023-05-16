import { registerEnumType } from '@nestjs/graphql';

export enum RestaurantScalarFieldEnum {
    id = "id",
    title = "title",
    banner = "banner",
    managerId = "managerId"
}


registerEnumType(RestaurantScalarFieldEnum, { name: 'RestaurantScalarFieldEnum', description: undefined })
