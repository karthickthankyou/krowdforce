import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { UserRelationFilter } from 'src/models/users/dtos/where.args'

@InputType()
export class FollowFollowerIdFollowingIdCompoundUniqueInput {
  followerId: string
  followingId: string
}

@InputType()
export class FollowWhereUniqueInput {
  @Field({ nullable: true })
  id: number
  @Field({ nullable: true })
  followerId_followingId?: FollowFollowerIdFollowingIdCompoundUniqueInput
}

@InputType()
export class FollowWhereInputStrict
  implements
    RestrictProperties<FollowWhereInputStrict, Prisma.FollowWhereInput>
{
  id: IntFilter
  createdAt: DateTimeFilter
  followerId: StringFilter
  followingId: StringFilter
  follower: UserRelationFilter
  following: UserRelationFilter

  AND: FollowWhereInput[]
  OR: FollowWhereInput[]
  NOT: FollowWhereInput[]
}

@InputType()
export class FollowWhereInput extends PartialType(FollowWhereInputStrict) {}

@InputType()
export class FollowListRelationFilter {
  every?: FollowWhereInput
  some?: FollowWhereInput
  none?: FollowWhereInput
}

@InputType()
export class FollowRelationFilter {
  is?: FollowWhereInput
  isNot?: FollowWhereInput
}
