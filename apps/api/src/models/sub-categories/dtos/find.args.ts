import { ArgsType, Field, PartialType, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { SubCategoryOrderByWithRelationInput } from './order-by.args'
import {
  SubCategoryWhereInput,
  SubCategoryWhereUniqueInput,
} from './where.args'

registerEnumType(Prisma.SubCategoryScalarFieldEnum, {
  name: 'SubCategoryScalarFieldEnum',
})

@ArgsType()
class FindManySubCategoryArgsStrict
  implements
    RestrictProperties<
      FindManySubCategoryArgsStrict,
      Omit<Prisma.SubCategoryFindManyArgs, 'include' | 'select'>
    >
{
  where: SubCategoryWhereInput
  orderBy: SubCategoryOrderByWithRelationInput[]
  cursor: SubCategoryWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.SubCategoryScalarFieldEnum])
  distinct: Prisma.SubCategoryScalarFieldEnum[]
}

@ArgsType()
export class FindManySubCategoryArgs extends PartialType(
  FindManySubCategoryArgsStrict,
) {}

@ArgsType()
export class FindUniqueSubCategoryArgs {
  @Field({ nullable: true })
  where: SubCategoryWhereUniqueInput
}
