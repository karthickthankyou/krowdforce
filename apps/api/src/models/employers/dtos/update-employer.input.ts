import { InputType, PartialType } from '@nestjs/graphql'
import { Employer } from '@prisma/client'
import { CreateEmployerInput } from './create-employer.input'

@InputType()
export class UpdateEmployerInput extends PartialType(CreateEmployerInput) {
  uid: Employer['uid']
}
