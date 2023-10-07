import { InputType, PickType } from '@nestjs/graphql';
import { Employee } from '../entity/employee.entity';
import { CreateCompanyInput } from 'src/models/companies/dtos/create-company.input';

@InputType()
export class CreateEmployeeInput extends PickType(
  Employee,
  ['uid'],
  InputType,
) {}
