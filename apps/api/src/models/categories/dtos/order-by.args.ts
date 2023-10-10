import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { SubCategoryOrderByRelationAggregateInput } from 'src/models/sub-categories/dtos/order-by.args'

@InputType()
export class CategoryOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      CategoryOrderByWithRelationInputStrict,
      Prisma.CategoryOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  name: Prisma.SortOrder
  subCategories: SubCategoryOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class CategoryOrderByWithRelationInput extends PartialType(
  CategoryOrderByWithRelationInputStrict,
) {}

@InputType()
export class CategoryOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
