import { registerEnumType } from '@nestjs/graphql';

export enum RestaurantScalarFieldEnum {
    id = "id",
    title = "title",
    banner = "banner",
    fone = "fone",
    address = "address",
    openingHours = "openingHours",
    managerId = "managerId"
}


registerEnumType(RestaurantScalarFieldEnum, { name: 'RestaurantScalarFieldEnum', description: undefined })
