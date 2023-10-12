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
export class PostWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class PostWhereInputStrict
  implements RestrictProperties<PostWhereInputStrict, Prisma.PostWhereInput>
{
  id: IntFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  title: StringFilter
  content: StringFilter
  image: StringFilter
  authorId: StringFilter
  author: UserRelationFilter

  AND: PostWhereInput[]
  OR: PostWhereInput[]
  NOT: PostWhereInput[]
}

@InputType()
export class PostWhereInput extends PartialType(PostWhereInputStrict) {}

@InputType()
export class PostListRelationFilter {
  every?: PostWhereInput
  some?: PostWhereInput
  none?: PostWhereInput
}

@InputType()
export class PostRelationFilter {
  is?: PostWhereInput
  isNot?: PostWhereInput
}
