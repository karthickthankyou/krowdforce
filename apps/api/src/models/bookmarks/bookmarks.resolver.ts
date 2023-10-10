import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'
import { BookmarksService } from './bookmarks.service'
import { Bookmark } from './entity/bookmark.entity'
import { FindManyBookmarkArgs, FindUniqueBookmarkArgs } from './dtos/find.args'
import { CreateBookmarkInput } from './dtos/create-bookmark.input'
import { UpdateBookmarkInput } from './dtos/update-bookmark.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Employee } from '../employees/entity/employee.entity'
import { Job } from '../jobs/entity/job.entity'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/guards'

@Resolver(() => Bookmark)
export class BookmarksResolver {
  constructor(
    private readonly bookmarksService: BookmarksService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Bookmark)
  createBookmark(
    @Args('createBookmarkInput') args: CreateBookmarkInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.employeeId)
    return this.bookmarksService.create(args)
  }

  @Query(() => [Bookmark], { name: 'bookmarks' })
  findAll(@Args() args: FindManyBookmarkArgs) {
    return this.bookmarksService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => [Bookmark], { name: 'myBookmarks' })
  myBookmarks(
    @Args() args: FindManyBookmarkArgs,
    @GetUser() user: GetUserType,
  ) {
    return this.bookmarksService.findAll({
      ...args,
      where: { ...args.where, employeeId: { equals: user.uid } },
    })
  }

  @Query(() => Bookmark, { name: 'bookmark' })
  findOne(@Args() args: FindUniqueBookmarkArgs) {
    return this.bookmarksService.findOne(args)
  }

  @Mutation(() => Bookmark)
  updateBookmark(@Args('updateBookmarkInput') args: UpdateBookmarkInput) {
    return this.bookmarksService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Bookmark)
  removeBookmark(
    @Args() args: FindUniqueBookmarkArgs,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.where.employeeId_jobId.employeeId)

    return this.bookmarksService.remove(args)
  }

  @ResolveField(() => Employee)
  employee(@Parent() parent: Bookmark) {
    return this.prisma.employee.findUnique({
      where: { uid: parent.employeeId },
    })
  }

  @ResolveField(() => Job)
  job(@Parent() parent: Bookmark) {
    return this.prisma.job.findUnique({ where: { id: parent.jobId } })
  }
}
