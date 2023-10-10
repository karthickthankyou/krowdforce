import { InputType, PartialType } from '@nestjs/graphql'
import { Category } from '@prisma/client'
import { CreateCategoryInput } from './create-category.input'

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  name: Category['name']
}
