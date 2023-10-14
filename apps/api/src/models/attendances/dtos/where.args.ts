import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  BoolFilter,
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { EmployeeRelationFilter } from 'src/models/employees/dtos/where.args'
import { JobRelationFilter } from 'src/models/jobs/dtos/where.args'

@InputType()
export class AttendanceWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class AttendanceWhereInputStrict
  implements
    RestrictProperties<AttendanceWhereInputStrict, Prisma.AttendanceWhereInput>
{
  paid: BoolFilter
  id: IntFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  clockIn: DateTimeFilter
  clockOut: DateTimeFilter
  employeeId: StringFilter
  jobId: IntFilter
  employee: EmployeeRelationFilter
  job: JobRelationFilter

  AND: AttendanceWhereInput[]
  OR: AttendanceWhereInput[]
  NOT: AttendanceWhereInput[]
}

@InputType()
export class AttendanceWhereInput extends PartialType(
  AttendanceWhereInputStrict,
) {}

@InputType()
export class AttendanceListRelationFilter {
  every?: AttendanceWhereInput
  some?: AttendanceWhereInput
  none?: AttendanceWhereInput
}

@InputType()
export class AttendanceRelationFilter {
  is?: AttendanceWhereInput
  isNot?: AttendanceWhereInput
}
