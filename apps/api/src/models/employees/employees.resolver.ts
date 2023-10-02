import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { EmployeesService } from './employees.service'
import { Employee } from './entity/employee.entity'
import { FindManyEmployeeArgs, FindUniqueEmployeeArgs } from './dtos/find.args'
import { CreateEmployeeInput } from './dtos/create-employee.input'
import { UpdateEmployeeInput } from './dtos/update-employee.input'

@Resolver(() => Employee)
export class EmployeesResolver {
  constructor(private readonly employeesService: EmployeesService) {}

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
}
