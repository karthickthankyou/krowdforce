import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { PostOrderByWithRelationInput } from './order-by.args'
import { PostWhereInput, PostWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.PostScalarFieldEnum, {
  name: 'PostScalarFieldEnum',
})

@ArgsType()
class FindManyPostArgsStrict
  implements
    RestrictProperties<
      FindManyPostArgsStrict,
      Omit<Prisma.PostFindManyArgs, 'include' | 'select'>
    >
{
  where: PostWhereInput
  orderBy: PostOrderByWithRelationInput[]
  cursor: PostWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.PostScalarFieldEnum])
  distinct: Prisma.PostScalarFieldEnum[]
}

@ArgsType()
export class FindManyPostArgs extends PartialType(FindManyPostArgsStrict) {}

@ArgsType()
export class FindUniquePostArgs {
  @Field({ nullable: true })
  where: PostWhereUniqueInput
}
