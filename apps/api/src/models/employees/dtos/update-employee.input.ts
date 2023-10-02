import { CreateEmployeeInput } from './create-employee.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { Employee } from '@prisma/client';

@InputType()
export class UpdateEmployeeInput extends PartialType(CreateEmployeeInput) {
  uid: Employee['uid'];
}
