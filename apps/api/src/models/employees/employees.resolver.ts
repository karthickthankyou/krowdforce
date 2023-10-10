import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { SubCategory } from '../sub-categories/entity/sub-category.entity'
import { User } from '../users/entity/user.entity'
import { CreateEmployeeInput } from './dtos/create-employee.input'
import { FindManyEmployeeArgs, FindUniqueEmployeeArgs } from './dtos/find.args'
import { UpdateEmployeeInput } from './dtos/update-employee.input'
import { EmployeesService } from './employees.service'
import { Employee } from './entity/employee.entity'
import { Application } from '../applications/entity/application.entity'
import { Bookmark } from '../bookmarks/entity/bookmark.entity'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from 'src/common/types'

@Resolver(() => Employee)
export class EmployeesResolver {
  constructor(
    private readonly employeesService: EmployeesService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Employee)
  createEmployee(@Args('createEmployeeInput') args: CreateEmployeeInput) {
    return this.employeesService.create(args)
  }

  @Query(() => [Employee], { name: 'employees' })
  findAll(@Args() args: FindManyEmployeeArgs) {
    return this.employeesService.findAll(args)
  }

  @Query(() => Employee, { name: 'employee' })
  findOne(@Args() args: FindUniqueEmployeeArgs) {
    return this.employeesService.findOne(args)
  }

  @AllowAuthenticated()
  @Query(() => Employee, { name: 'employeeMe' })
  employeeMe(@GetUser() user: GetUserType) {
    return this.employeesService.findOne({
      where: { uid: user.uid },
    })
  }
  @Mutation(() => Employee)
  updateEmployee(@Args('updateEmployeeInput') args: UpdateEmployeeInput) {
    return this.employeesService.update(args)
  }

  @Mutation(() => Employee)
  removeEmployee(@Args() args: FindUniqueEmployeeArgs) {
    return this.employeesService.remove(args)
  }

  @ResolveField(() => User)
  user(@Parent() parent: User) {
    return this.prisma.user.findUnique({ where: { uid: parent.uid } })
  }

  @ResolveField(() => [SubCategory])
  skills(@Parent() parent: User) {
    return this.prisma.subCategory.findMany({
      where: { employees: { some: { uid: parent.uid } } },
    })
  }

  @ResolveField(() => [Application])
  applications(@Parent() parent: User) {
    return this.prisma.application.findMany({
      where: { employeeId: parent.uid },
    })
  }

  @ResolveField(() => [Bookmark])
  bookmarks(@Parent() parent: User) {
    return this.prisma.bookmark.findMany({
      where: { employeeId: parent.uid },
    })
  }
}
