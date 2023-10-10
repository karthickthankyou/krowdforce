import { Field, InputType, PartialType } from '@nestjs/graphql'
import { $Enums, Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { EmployeeRelationFilter } from 'src/models/employees/dtos/where.args'
import { JobRelationFilter } from 'src/models/jobs/dtos/where.args'

@InputType()
export class EmployeeIdJobIdCompoundUniqueInput {
  employeeId: string
  jobId: number
}

@InputType()
export class ApplicationWhereUniqueInput {
  employeeId_jobId: EmployeeIdJobIdCompoundUniqueInput
}

@InputType()
export class ApplicationWhereInputStrict
  implements
    RestrictProperties<
      ApplicationWhereInputStrict,
      Prisma.ApplicationWhereInput
    >
{
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  employeeId: StringFilter
  jobId: IntFilter
  @Field(() => $Enums.ApplicationStatus)
  status: $Enums.ApplicationStatus

  employee: EmployeeRelationFilter
  job: JobRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: ApplicationWhereInput[]
  OR: ApplicationWhereInput[]
  NOT: ApplicationWhereInput[]
}

@InputType()
export class ApplicationWhereInput extends PartialType(
  ApplicationWhereInputStrict,
) {}

@InputType()
export class ApplicationListRelationFilter {
  every?: ApplicationWhereInput
  some?: ApplicationWhereInput
  none?: ApplicationWhereInput
}

@InputType()
export class ApplicationRelationFilter {
  is?: ApplicationWhereInput
  isNot?: ApplicationWhereInput
}
