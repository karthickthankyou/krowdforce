import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { EmployeeOrderByWithRelationInput } from 'src/models/employees/dtos/order-by.args'
import { JobOrderByWithRelationInput } from 'src/models/jobs/dtos/order-by.args'

@InputType()
export class AttendanceOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      AttendanceOrderByWithRelationInputStrict,
      Prisma.AttendanceOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  paid: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  clockIn: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  clockOut: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  employeeId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  jobId: Prisma.SortOrder

  employee: EmployeeOrderByWithRelationInput

  job: JobOrderByWithRelationInput
  // Todo: Add below field decorator to the SortOrder properties.
}

@InputType()
export class AttendanceOrderByWithRelationInput extends PartialType(
  AttendanceOrderByWithRelationInputStrict,
) {}

@InputType()
export class AttendanceOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
