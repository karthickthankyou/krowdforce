import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { AddressOrderByWithRelationInput } from 'src/models/addresses/dtos/order-by.args'
import { ApplicationOrderByRelationAggregateInput } from 'src/models/applications/dtos/order-by.args'
import { BookmarkOrderByRelationAggregateInput } from 'src/models/bookmarks/dtos/order-by.args'
import { CompanyOrderByWithRelationInput } from 'src/models/companies/dtos/order-by.args'
import { EmployerOrderByWithRelationInput } from 'src/models/employers/dtos/order-by.args'
import { SubCategoryOrderByRelationAggregateInput } from 'src/models/sub-categories/dtos/order-by.args'

@InputType()
export class JobOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      JobOrderByWithRelationInputStrict,
      Prisma.JobOrderByWithRelationInput
    >
{
  Bookmark: BookmarkOrderByRelationAggregateInput
  Application: ApplicationOrderByRelationAggregateInput
  @Field(() => Prisma.SortOrder)
  employerId: Prisma.SortOrder
  Employer: EmployerOrderByWithRelationInput
  @Field(() => Prisma.SortOrder)
  contactInfo: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  companyId: Prisma.SortOrder
  Company: CompanyOrderByWithRelationInput
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  title: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  description: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  addressId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  status: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  type: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  start: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  end: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  salary: Prisma.SortOrder

  skills: SubCategoryOrderByRelationAggregateInput
  address: AddressOrderByWithRelationInput
}

@InputType()
export class JobOrderByWithRelationInput extends PartialType(
  JobOrderByWithRelationInputStrict,
) {}

@InputType()
export class JobOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
