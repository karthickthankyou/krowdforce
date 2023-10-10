import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { GetUserType } from 'src/common/types'
import { Employee } from '../employees/entity/employee.entity'
import { Employer } from '../employers/entity/employer.entity'
import { CreateUserInput } from './dtos/create-user.input'
import { FindManyUserArgs, FindUniqueUserArgs } from './dtos/find.args'
import { UpdateUserInput } from './dtos/update-user.input'
import { User } from './entity/user.entity'
import { UsersService } from './users.service'

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') args: CreateUserInput) {
    return this.usersService.create(args)
  }

  @AllowAuthenticated()
  @Query(() => [User], { name: 'users' })
  async findAll(@Args() args: FindManyUserArgs, @GetUser() user: GetUserType) {
    const users = await this.usersService.findAll(args)

    return users
    // throw new BadRequestException('No');
  }

  @Query(() => User, { name: 'user' })
  async findOne(@Args() args: FindUniqueUserArgs) {
    const user = await this.usersService.findOne(args)

    return user
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') args: UpdateUserInput) {
    return this.usersService.update(args)
  }

  @Mutation(() => User)
  removeUser(@Args() args: FindUniqueUserArgs) {
    return this.usersService.remove(args)
  }

  @ResolveField(() => Employee)
  employee(@Parent() parent: User) {
    return this.prisma.employee.findUnique({ where: { uid: parent.uid } })
  }

  @ResolveField(() => Employer)
  employer(@Parent() parent: User) {
    return this.prisma.employer.findUnique({ where: { uid: parent.uid } })
  }
}
