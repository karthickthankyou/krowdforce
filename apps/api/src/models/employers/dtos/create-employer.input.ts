import { Field, InputType, PickType } from '@nestjs/graphql';
import { Employer } from '../entity/employer.entity';
import { CreateCompanyInput } from 'src/models/companies/dtos/create-company.input';

@InputType()
export class CreateEmployerInput extends PickType(
  Employer,
  ['uid'],
  InputType,
) {
  @Field(() => CreateCompanyInput)
  company: CreateCompanyInput;
}
