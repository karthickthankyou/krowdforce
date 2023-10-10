import { ArgsType, Field, PartialType, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { CategoryOrderByWithRelationInput } from './order-by.args'
import { CategoryWhereInput, CategoryWhereUniqueInput } from './where.args'

registerEnumType(Prisma.CategoryScalarFieldEnum, {
  name: 'CategoryScalarFieldEnum',
})

@ArgsType()
class FindManyCategoryArgsStrict
  implements
    RestrictProperties<
      FindManyCategoryArgsStrict,
      Omit<Prisma.CategoryFindManyArgs, 'include' | 'select'>
    >
{
  where: CategoryWhereInput
  orderBy: CategoryOrderByWithRelationInput[]
  cursor: CategoryWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.CategoryScalarFieldEnum])
  distinct: Prisma.CategoryScalarFieldEnum[]
}

@ArgsType()
export class FindManyCategoryArgs extends PartialType(
  FindManyCategoryArgsStrict,
) {}

@ArgsType()
export class FindUniqueCategoryArgs {
  @Field({ nullable: true })
  where: CategoryWhereUniqueInput
}
