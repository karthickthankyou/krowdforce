import { InputType, PartialType } from '@nestjs/graphql'
import { SubCategory } from '@prisma/client'
import { CreateSubCategoryInput } from './create-sub-category.input'

@InputType()
export class UpdateSubCategoryInput extends PartialType(
  CreateSubCategoryInput,
) {
  name: SubCategory['name']
}
