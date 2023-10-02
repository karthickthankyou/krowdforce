import { CreateEmployerInput } from './create-employer.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { Employer } from '@prisma/client';

@InputType()
export class UpdateEmployerInput extends PartialType(CreateEmployerInput) {
  uid: Employer['uid'];
}
