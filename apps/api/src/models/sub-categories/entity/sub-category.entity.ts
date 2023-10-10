import { ObjectType } from '@nestjs/graphql'
import { SubCategory as SubCategoryType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class SubCategory
  implements RestrictProperties<SubCategory, SubCategoryType>
{
  name: string
  categoryName: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
