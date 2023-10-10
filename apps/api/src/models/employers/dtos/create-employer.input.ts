import { InputType, PickType } from '@nestjs/graphql'
import { Employer } from '../entity/employer.entity'
import { CreateCompanyInput } from 'src/models/companies/dtos/create-company.input'
import { CreateAddressInput } from 'src/models/addresses/dtos/create-address.input'

@InputType()
export class CreateEmployerInput extends PickType(
  Employer,
  ['uid'],
  InputType,
) {
  company: CreateCompanyInput
  address: CreateAddressInput
}
