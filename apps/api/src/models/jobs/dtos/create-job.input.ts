import { InputType, PickType } from '@nestjs/graphql';
import { Job } from '../entity/job.entity';

@InputType()
export class CreateJobInput extends PickType(
  Job,
  [
    'addressId',
    'description',
    'employerId',
    'end',
    'salary',
    'start',
    'status',
    'title',
    'type',
  ],
  InputType,
) {}
