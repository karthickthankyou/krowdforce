import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { FollowsService } from './follows.service'
import { Follow } from './entity/follow.entity'
import { FindManyFollowArgs, FindUniqueFollowArgs } from './dtos/find.args'
import { CreateFollowInput } from './dtos/create-follow.input'
import { UpdateFollowInput } from './dtos/update-follow.input'
import { User } from '../users/entity/user.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => Follow)
export class FollowsResolver {
  constructor(
    private readonly followsService: FollowsService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Follow)
  createFollow(@Args('createFollowInput') args: CreateFollowInput) {
    return this.followsService.create(args)
  }

  @Query(() => [Follow], { name: 'follows' })
  findAll(@Args() args: FindManyFollowArgs) {
    return this.followsService.findAll(args)
  }

  @Query(() => Follow, { name: 'follow' })
  findOne(@Args() args: FindUniqueFollowArgs) {
    return this.followsService.findOne(args)
  }

  @Mutation(() => Follow)
  updateFollow(@Args('updateFollowInput') args: UpdateFollowInput) {
    return this.followsService.update(args)
  }

  @Mutation(() => Follow)
  removeFollow(@Args() args: FindUniqueFollowArgs) {
    return this.followsService.remove(args)
  }

  @ResolveField(() => User)
  follower(@Parent() parent: Follow): Promise<User> {
    return this.prisma.user.findUnique({ where: { uid: parent.followerId } })
  }

  @ResolveField(() => User)
  following(@Parent() parent: Follow): Promise<User> {
    return this.prisma.user.findUnique({ where: { uid: parent.followingId } })
  }
}
