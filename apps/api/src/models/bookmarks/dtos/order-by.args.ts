import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { EmployeeOrderByWithRelationInput } from 'src/models/employees/dtos/order-by.args'
import { JobOrderByWithRelationInput } from 'src/models/jobs/dtos/order-by.args'

@InputType()
export class BookmarkOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      BookmarkOrderByWithRelationInputStrict,
      Prisma.BookmarkOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  employeeId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  jobId: Prisma.SortOrder
  employee: EmployeeOrderByWithRelationInput
  job: JobOrderByWithRelationInput
}

@InputType()
export class BookmarkOrderByWithRelationInput extends PartialType(
  BookmarkOrderByWithRelationInputStrict,
) {}

@InputType()
export class BookmarkOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
