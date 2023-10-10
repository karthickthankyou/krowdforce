import { CreateJobInput } from './create-job.input'
import { InputType, OmitType, PartialType } from '@nestjs/graphql'
import { Job } from '@prisma/client'

@InputType()
export class UpdateJobInput extends PartialType(
  OmitType(CreateJobInput, ['address', 'skills']),
) {
  id: Job['id']
}
