import { CreateJobInput } from './create-job.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Job } from '@prisma/client'

@InputType()
export class UpdateJobInput extends PartialType(CreateJobInput) {
  id: Job['id']
}
