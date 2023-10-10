import { InputType, OmitType, PartialType } from '@nestjs/graphql'
import { Job } from '@prisma/client'
import { CreateJobInput } from './create-job.input'

@InputType()
export class UpdateJobInput extends PartialType(
  OmitType(CreateJobInput, ['address', 'skills']),
) {
  id: Job['id']
}
