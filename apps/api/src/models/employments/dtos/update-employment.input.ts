import { CreateEmploymentInput } from './create-employment.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Employment } from '@prisma/client'

@InputType()
export class UpdateEmploymentInput extends PartialType(CreateEmploymentInput) {
  id: Employment['id']
}
