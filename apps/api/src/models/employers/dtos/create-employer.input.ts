import { InputType, PickType } from '@nestjs/graphql';
import { Employer } from '../entity/employer.entity';

@InputType()
export class CreateEmployerInput extends PickType(
  Employer,
  ['uid'],
  InputType,
) {}
