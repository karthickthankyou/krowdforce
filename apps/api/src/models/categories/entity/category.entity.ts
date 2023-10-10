import { ObjectType } from '@nestjs/graphql'
import { Category as CategoryType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Category implements RestrictProperties<Category, CategoryType> {
  name: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
