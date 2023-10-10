import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { BookmarkOrderByWithRelationInput } from './order-by.args'
import { BookmarkWhereInput, BookmarkWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.BookmarkScalarFieldEnum, {
  name: 'BookmarkScalarFieldEnum',
})

@ArgsType()
class FindManyBookmarkArgsStrict
  implements
    RestrictProperties<
      FindManyBookmarkArgsStrict,
      Omit<Prisma.BookmarkFindManyArgs, 'include' | 'select'>
    >
{
  where: BookmarkWhereInput
  orderBy: BookmarkOrderByWithRelationInput[]
  cursor: BookmarkWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.BookmarkScalarFieldEnum])
  distinct: Prisma.BookmarkScalarFieldEnum[]
}

@ArgsType()
export class FindManyBookmarkArgs extends PartialType(
  FindManyBookmarkArgsStrict,
) {}

@ArgsType()
export class FindUniqueBookmarkArgs {
  @Field({ nullable: true })
  where: BookmarkWhereUniqueInput
}
