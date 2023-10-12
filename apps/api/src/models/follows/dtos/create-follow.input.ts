import { InputType, PickType } from '@nestjs/graphql'
import { Follow } from '../entity/follow.entity'

@InputType()
export class CreateFollowInput extends PickType(
  Follow,
  ['followerId', 'followingId'],
  InputType,
) {}
