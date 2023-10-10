import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties, StringFilter } from 'src/common/dtos/common.input'
import { SubCategoryListRelationFilter } from 'src/models/sub-categories/dtos/where.args'

@InputType()
export class CategoryWhereUniqueInput {
  name: string
}

@InputType()
export class CategoryWhereInputStrict
  implements
    RestrictProperties<CategoryWhereInputStrict, Prisma.CategoryWhereInput>
{
  name: StringFilter
  subCategories: SubCategoryListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: CategoryWhereInput[]
  OR: CategoryWhereInput[]
  NOT: CategoryWhereInput[]
}

@InputType()
export class CategoryWhereInput extends PartialType(CategoryWhereInputStrict) {}

@InputType()
export class CategoryListRelationFilter {
  every?: CategoryWhereInput
  some?: CategoryWhereInput
  none?: CategoryWhereInput
}

@InputType()
export class CategoryRelationFilter {
  is?: CategoryWhereInput
  isNot?: CategoryWhereInput
}
