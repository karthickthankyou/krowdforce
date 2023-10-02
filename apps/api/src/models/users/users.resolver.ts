import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entity/user.entity';
import { FindManyUserArgs, FindUniqueUserArgs } from './dtos/find.args';
import { CreateUserInput } from './dtos/create-user.input';
import { UpdateUserInput } from './dtos/update-user.input';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Employee } from '../employees/entity/employee.entity';
import { Employer } from '../employers/entity/employer.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') args: CreateUserInput) {
    return this.usersService.create(args);
  }

  @Query(() => [User], { name: 'users' })
  findAll(@Args() args: FindManyUserArgs) {
    return this.usersService.findAll(args);
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args() args: FindUniqueUserArgs) {
    return this.usersService.findOne(args);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') args: UpdateUserInput) {
    return this.usersService.update(args);
  }

  @Mutation(() => User)
  removeUser(@Args() args: FindUniqueUserArgs) {
    return this.usersService.remove(args);
  }

  @ResolveField(() => Employee)
  employee(@Parent() parent: User) {
    return this.prisma.employee.findUnique({ where: { uid: parent.uid } });
  }

  @ResolveField(() => Employer)
  employer(@Parent() parent: User) {
    return this.prisma.employer.findUnique({ where: { uid: parent.uid } });
  }
}
