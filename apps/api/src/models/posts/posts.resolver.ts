import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { PostsService } from './posts.service'
import { Post } from './entity/post.entity'
import { FindManyPostArgs, FindUniquePostArgs } from './dtos/find.args'
import { CreatePostInput } from './dtos/create-post.input'
import { UpdatePostInput } from './dtos/update-post.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { User } from '../users/entity/user.entity'
import {
  AllowAuthenticated,
  AllowAuthenticatedOptional,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from 'src/common/types'

@Resolver(() => Post)
export class PostsResolver {
  constructor(
    private readonly postsService: PostsService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Post)
  createPost(@Args('createPostInput') args: CreatePostInput) {
    return this.postsService.create(args)
  }

  @Query(() => [Post], { name: 'posts' })
  findAll(@Args() args: FindManyPostArgs) {
    return this.postsService.findAll(args)
  }

  @AllowAuthenticatedOptional()
  @Query(() => [Post], { name: 'postFeed' })
  async postFeed(
    @Args() { skip = 0, take = 10, where }: FindManyPostArgs,
    @GetUser() user: GetUserType,
  ) {
    const uid = user?.uid

    if (!uid) {
      return this.prisma.post.findMany({ skip, take })
    }

    return this.prisma.post.findMany({
      where: {
        AND: [
          {
            author: {
              followedBy: {
                some: {
                  followerId: uid,
                },
              },
            },
          },
          where,
        ],
      },
      skip,
      take,
      orderBy: {
        createdAt: 'desc',
      },
    })
  }

  @Query(() => Post, { name: 'post' })
  findOne(@Args() args: FindUniquePostArgs) {
    return this.postsService.findOne(args)
  }

  @Mutation(() => Post)
  updatePost(@Args('updatePostInput') args: UpdatePostInput) {
    return this.postsService.update(args)
  }

  @Mutation(() => Post)
  removePost(@Args() args: FindUniquePostArgs) {
    return this.postsService.remove(args)
  }

  @ResolveField(() => User)
  author(@Parent() parent: Post): Promise<User> {
    return this.prisma.user.findUnique({ where: { uid: parent.authorId } })
  }
}
