import { InputType, PickType } from '@nestjs/graphql';
import { Job } from '../entity/job.entity';

@InputType()
export class CreateJobInput extends PickType(
  Job,
  [
    'addressId',
    'description',
    'companyId',
    'end',
    'salary',
    'start',
    'status',
    'title',
    'type',
  ],
  InputType,
) {}
