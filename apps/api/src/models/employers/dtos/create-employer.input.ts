import { InputType, PickType } from '@nestjs/graphql'
import { Employer } from '../entity/employer.entity'

@InputType()
export class CreateEmployerInput extends PickType(
  Employer,
  ['uid'],
  InputType,
) {
  //   company: CreateCompanyInput
  //   address: CreateAddressInput
}
@InputType()
export class AddEmployerInput extends PickType(Employer, ['uid'], InputType) {}
