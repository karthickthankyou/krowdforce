import { Field, ObjectType } from '@nestjs/graphql'
import { $Enums, Job as JobType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Job implements RestrictProperties<Job, JobType> {
  @Field({ nullable: true })
  contactInfo: string
  companyId: number
  createdAt: Date
  updatedAt: Date
  id: number
  title: string
  description: string
  @Field({ nullable: true })
  addressId: number
  @Field(() => $Enums.JobStatus)
  status: $Enums.JobStatus
  @Field(() => $Enums.JobType)
  type: $Enums.JobType
  @Field({ nullable: true })
  start: Date
  @Field({ nullable: true })
  end: Date
  @Field({ nullable: true })
  salary: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
