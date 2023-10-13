import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { JobOrderByWithRelationInput } from 'src/models/jobs/dtos/order-by.args'

@InputType()
export class ShiftInformationOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ShiftInformationOrderByWithRelationInputStrict,
      Prisma.ShiftInformationOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  jobId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  startTime: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  endTime: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  days: Prisma.SortOrder

  Job: JobOrderByWithRelationInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class ShiftInformationOrderByWithRelationInput extends PartialType(
  ShiftInformationOrderByWithRelationInputStrict,
) {}

@InputType()
export class ShiftInformationOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
