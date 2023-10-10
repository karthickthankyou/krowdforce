import { InputType, PickType } from '@nestjs/graphql'
import { CreateAddressInput } from 'src/models/addresses/dtos/create-address.input'
import { CreateCompanyInput } from 'src/models/companies/dtos/create-company.input'
import { Employer } from '../entity/employer.entity'

@InputType()
export class CreateEmployerInput extends PickType(
  Employer,
  ['uid'],
  InputType,
) {
  company: CreateCompanyInput
  address: CreateAddressInput
}
