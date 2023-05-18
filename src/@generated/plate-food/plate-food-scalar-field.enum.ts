import { registerEnumType } from '@nestjs/graphql';

export enum PlateFoodScalarFieldEnum {
    id = "id",
    title = "title",
    ingredients = "ingredients",
    setupTime = "setupTime",
    image = "image",
    menuId = "menuId",
    categoryId = "categoryId"
}


registerEnumType(PlateFoodScalarFieldEnum, { name: 'PlateFoodScalarFieldEnum', description: undefined })
