import { CreateCategoryInput } from './create-category.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Category } from '@prisma/client'

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  name: Category['name']
}
