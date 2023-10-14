import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { AddressOrderByWithRelationInput } from 'src/models/addresses/dtos/order-by.args'
import { ApplicationOrderByRelationAggregateInput } from 'src/models/applications/dtos/order-by.args'
import { AttendanceOrderByRelationAggregateInput } from 'src/models/attendances/dtos/order-by.args'
import { BookmarkOrderByRelationAggregateInput } from 'src/models/bookmarks/dtos/order-by.args'
import { EmploymentOrderByRelationAggregateInput } from 'src/models/employments/dtos/order-by.args'
import { SubCategoryOrderByRelationAggregateInput } from 'src/models/sub-categories/dtos/order-by.args'
import { UserOrderByWithRelationInput } from 'src/models/users/dtos/order-by.args'

@InputType()
export class EmployeeOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      EmployeeOrderByWithRelationInputStrict,
      Prisma.EmployeeOrderByWithRelationInput
    >
{
  Attendance: AttendanceOrderByRelationAggregateInput
  Employment: EmploymentOrderByRelationAggregateInput
  @Field(() => Prisma.SortOrder)
  contactInfo: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  addressId: Prisma.SortOrder
  address: AddressOrderByWithRelationInput
  @Field(() => Prisma.SortOrder)
  about: Prisma.SortOrder
  Bookmark: BookmarkOrderByRelationAggregateInput
  Application: ApplicationOrderByRelationAggregateInput
  @Field(() => Prisma.SortOrder)
  uid: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  user: UserOrderByWithRelationInput
  skills: SubCategoryOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class EmployeeOrderByWithRelationInput extends PartialType(
  EmployeeOrderByWithRelationInputStrict,
) {}

@InputType()
export class EmployeeOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
