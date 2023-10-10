import { InputType, OmitType, PartialType } from '@nestjs/graphql'
import { Employer } from '@prisma/client'
import { CreateEmployerInput } from './create-employer.input'

@InputType()
export class UpdateEmployerInput extends PartialType(
  OmitType(CreateEmployerInput, ['address', 'company']),
) {
  uid: Employer['uid']
}
