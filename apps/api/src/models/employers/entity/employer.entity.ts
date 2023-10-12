import { Field, ObjectType } from '@nestjs/graphql'
import { $Enums, Employer as EmployerType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Employer implements RestrictProperties<Employer, EmployerType> {
  @Field()
  uid: string
  createdAt: Date
  updatedAt: Date

  @Field({ nullable: true })
  companyId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}

@ObjectType()
export class ApplicationCountByStatus {
  @Field(() => $Enums.ApplicationStatus)
  name: $Enums.ApplicationStatus
  count: number
}
@ObjectType()
export class JobCountByStatus {
  @Field(() => $Enums.JobStatus)
  name: $Enums.JobStatus
  count: number
}
@ObjectType()
export class EmployerStats {
  jobs: JobCountByStatus[]
  applications: ApplicationCountByStatus[]
}
