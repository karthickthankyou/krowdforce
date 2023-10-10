import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { CompanyOrderByWithRelationInput } from 'src/models/companies/dtos/order-by.args'
import { UserOrderByWithRelationInput } from 'src/models/users/dtos/order-by.args'

@InputType()
export class EmployerOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      EmployerOrderByWithRelationInputStrict,
      Prisma.EmployerOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  companyId: Prisma.SortOrder
  company: CompanyOrderByWithRelationInput
  @Field(() => Prisma.SortOrder)
  uid: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  user: UserOrderByWithRelationInput

  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class EmployerOrderByWithRelationInput extends PartialType(
  EmployerOrderByWithRelationInputStrict,
) {}

@InputType()
export class EmployerOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
