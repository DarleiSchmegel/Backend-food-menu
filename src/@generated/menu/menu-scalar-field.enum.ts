import { registerEnumType } from '@nestjs/graphql';

export enum MenuScalarFieldEnum {
    id = "id",
    title = "title",
    banner = "banner",
    restaurantId = "restaurantId"
}


registerEnumType(MenuScalarFieldEnum, { name: 'MenuScalarFieldEnum', description: undefined })
