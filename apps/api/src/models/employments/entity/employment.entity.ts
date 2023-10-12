import { Field, ObjectType } from '@nestjs/graphql'
import { Employment as EmploymentType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Employment
  implements RestrictProperties<Employment, EmploymentType>
{
  id: number
  startDate: Date
  @Field({ nullable: true })
  endDate: Date
  createdAt: Date
  updatedAt: Date
  jobId: number
  employeeId: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
