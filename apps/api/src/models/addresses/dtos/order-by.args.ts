import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { CompanyOrderByRelationAggregateInput } from 'src/models/companies/dtos/order-by.args'
import { EmployeeOrderByRelationAggregateInput } from 'src/models/employees/dtos/order-by.args'
import { JobOrderByRelationAggregateInput } from 'src/models/jobs/dtos/order-by.args'

@InputType()
export class AddressOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      AddressOrderByWithRelationInputStrict,
      Prisma.AddressOrderByWithRelationInput
    >
{
  Employee: EmployeeOrderByRelationAggregateInput
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  address: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  lat: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  lng: Prisma.SortOrder
  job: JobOrderByRelationAggregateInput
  Company: CompanyOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class AddressOrderByWithRelationInput extends PartialType(
  AddressOrderByWithRelationInputStrict,
) {}

@InputType()
export class AddressOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
