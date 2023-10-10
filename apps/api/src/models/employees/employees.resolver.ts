import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { EmployeesService } from './employees.service'
import { Employee } from './entity/employee.entity'
import { FindManyEmployeeArgs, FindUniqueEmployeeArgs } from './dtos/find.args'
import { CreateEmployeeInput } from './dtos/create-employee.input'
import { UpdateEmployeeInput } from './dtos/update-employee.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { User } from '../users/entity/user.entity'
import { SubCategory } from '../sub-categories/entity/sub-category.entity'

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
}
