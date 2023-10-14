import { Field, ObjectType } from '@nestjs/graphql'
import { Attendance as AttendanceType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Attendance
  implements RestrictProperties<Attendance, AttendanceType>
{
  paid: boolean
  id: number
  createdAt: Date
  updatedAt: Date
  clockIn: Date
  @Field({ nullable: true })
  clockOut: Date
  employeeId: string
  jobId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
