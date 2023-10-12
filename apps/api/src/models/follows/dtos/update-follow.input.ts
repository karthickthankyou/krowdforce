import { CreateFollowInput } from './create-follow.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Follow } from '@prisma/client'

@InputType()
export class UpdateFollowInput extends PartialType(CreateFollowInput) {
  id: Follow['id']
}
