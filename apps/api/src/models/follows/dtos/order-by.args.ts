import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { UserOrderByWithRelationInput } from 'src/models/users/dtos/order-by.args'

@InputType()
export class FollowOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      FollowOrderByWithRelationInputStrict,
      Prisma.FollowOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  followerId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  followingId: Prisma.SortOrder

  follower: UserOrderByWithRelationInput
  following: UserOrderByWithRelationInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class FollowOrderByWithRelationInput extends PartialType(
  FollowOrderByWithRelationInputStrict,
) {}

@InputType()
export class FollowOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
