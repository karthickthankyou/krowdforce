import { InputType, PickType } from '@nestjs/graphql';
import { Employee } from '../entity/employee.entity';

@InputType()
export class CreateEmployeeInput extends PickType(
  Employee,
  ['uid'],
  InputType,
) {}
