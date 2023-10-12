import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { FollowOrderByWithRelationInput } from './order-by.args'
import { FollowWhereInput, FollowWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.FollowScalarFieldEnum, {
  name: 'FollowScalarFieldEnum',
})

@ArgsType()
class FindManyFollowArgsStrict
  implements
    RestrictProperties<
      FindManyFollowArgsStrict,
      Omit<Prisma.FollowFindManyArgs, 'include' | 'select'>
    >
{
  where: FollowWhereInput
  orderBy: FollowOrderByWithRelationInput[]
  cursor: FollowWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.FollowScalarFieldEnum])
  distinct: Prisma.FollowScalarFieldEnum[]
}

@ArgsType()
export class FindManyFollowArgs extends PartialType(FindManyFollowArgsStrict) {}

@ArgsType()
export class FindUniqueFollowArgs {
  @Field({ nullable: true })
  where: FollowWhereUniqueInput
}
