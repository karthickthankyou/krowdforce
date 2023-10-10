import { ObjectType } from '@nestjs/graphql'
import { Bookmark as BookmarkType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Bookmark implements RestrictProperties<Bookmark, BookmarkType> {
  createdAt: Date
  updatedAt: Date
  employeeId: string
  jobId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
