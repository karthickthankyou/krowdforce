import { InputType, PickType } from '@nestjs/graphql'
import { CreateAddressInput } from 'src/models/addresses/dtos/create-address.input'
import { Company } from '../entity/company.entity'

@InputType()
export class CreateCompanyInput extends PickType(
  Company,
  ['name', 'description'],
  InputType,
) {
  address: CreateAddressInput
  uid: string
}
