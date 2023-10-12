import { ObjectType } from '@nestjs/graphql'
import { Follow as FollowType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Follow implements RestrictProperties<Follow, FollowType> {
  id: number
  createdAt: Date
  followerId: string
  followingId: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
