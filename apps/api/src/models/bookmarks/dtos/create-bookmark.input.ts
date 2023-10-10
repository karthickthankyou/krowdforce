import { InputType, PickType } from '@nestjs/graphql'
import { Bookmark } from '../entity/bookmark.entity'

@InputType()
export class CreateBookmarkInput extends PickType(
  Bookmark,
  ['employeeId', 'jobId'],
  InputType,
) {}
