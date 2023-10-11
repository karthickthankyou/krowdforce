import { InputType, PickType } from '@nestjs/graphql'
import { Employee } from '../entity/employee.entity'
import { CreateAddressInput } from 'src/models/addresses/dtos/create-address.input'

@InputType()
export class CreateEmployeeInput extends PickType(
  Employee,
  ['uid', 'about', 'contactInfo'],
  InputType,
) {
  address: CreateAddressInput
  skills: string[]
}
