import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { CompanyRelationFilter } from 'src/models/companies/dtos/where.args'
import { EmployeeRelationFilter } from 'src/models/employees/dtos/where.args'
import { JobRelationFilter } from 'src/models/jobs/dtos/where.args'

@InputType()
export class EmploymentWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class EmploymentWhereInputStrict
  implements
    RestrictProperties<EmploymentWhereInputStrict, Prisma.EmploymentWhereInput>
{
  id: IntFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  startDate: DateTimeFilter
  endDate: DateTimeFilter
  jobId: IntFilter
  employeeId: StringFilter
  job: JobRelationFilter
  employee: EmployeeRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: EmploymentWhereInput[]
  OR: EmploymentWhereInput[]
  NOT: EmploymentWhereInput[]
}

@InputType()
export class EmploymentWhereInput extends PartialType(
  EmploymentWhereInputStrict,
) {}

@InputType()
export class EmploymentListRelationFilter {
  every?: EmploymentWhereInput
  some?: EmploymentWhereInput
  none?: EmploymentWhereInput
}

@InputType()
export class EmploymentRelationFilter {
  is?: EmploymentWhereInput
  isNot?: EmploymentWhereInput
}
