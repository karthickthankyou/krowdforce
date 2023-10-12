import { Field, ObjectType } from '@nestjs/graphql'
import { Post as PostType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Post implements RestrictProperties<Post, PostType> {
  id: number
  createdAt: Date
  updatedAt: Date
  title: string
  content: string
  @Field({ nullable: true })
  image: string
  authorId: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
