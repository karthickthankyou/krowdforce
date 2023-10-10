import { CreateSubCategoryInput } from './create-sub-category.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { SubCategory } from '@prisma/client'

@InputType()
export class UpdateSubCategoryInput extends PartialType(
  CreateSubCategoryInput,
) {
  name: SubCategory['name']
}
