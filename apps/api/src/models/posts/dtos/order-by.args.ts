import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { UserOrderByWithRelationInput } from 'src/models/users/dtos/order-by.args'

@InputType()
export class PostOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      PostOrderByWithRelationInputStrict,
      Prisma.PostOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  title: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  content: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  image: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  authorId: Prisma.SortOrder
  author: UserOrderByWithRelationInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class PostOrderByWithRelationInput extends PartialType(
  PostOrderByWithRelationInputStrict,
) {}

@InputType()
export class PostOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
