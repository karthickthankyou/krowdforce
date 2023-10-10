import { InputType, PartialType } from '@nestjs/graphql'
import { Employee } from '@prisma/client'
import { CreateEmployeeInput } from './create-employee.input'

@InputType()
export class UpdateEmployeeInput extends PartialType(CreateEmployeeInput) {
  uid: Employee['uid']
}
