import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { CompanyOrderByWithRelationInput } from 'src/models/companies/dtos/order-by.args'
import { EmployeeOrderByWithRelationInput } from 'src/models/employees/dtos/order-by.args'
import { JobOrderByWithRelationInput } from 'src/models/jobs/dtos/order-by.args'

@InputType()
export class EmploymentOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      EmploymentOrderByWithRelationInputStrict,
      Prisma.EmploymentOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  startDate: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  endDate: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  jobId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  employeeId: Prisma.SortOrder
  job: JobOrderByWithRelationInput
  employee: EmployeeOrderByWithRelationInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class EmploymentOrderByWithRelationInput extends PartialType(
  EmploymentOrderByWithRelationInputStrict,
) {}

@InputType()
export class EmploymentOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
