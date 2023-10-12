import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { EmploymentsService } from './employments.service'
import { Employment } from './entity/employment.entity'
import {
  FindManyEmploymentArgs,
  FindUniqueEmploymentArgs,
} from './dtos/find.args'
import { CreateEmploymentInput } from './dtos/create-employment.input'
import { UpdateEmploymentInput } from './dtos/update-employment.input'

@Resolver(() => Employment)
export class EmploymentsResolver {
  constructor(private readonly employmentsService: EmploymentsService) {}

  @Mutation(() => Employment)
  createEmployment(@Args('createEmploymentInput') args: CreateEmploymentInput) {
    return this.employmentsService.create(args)
  }

  @Query(() => [Employment], { name: 'employments' })
  findAll(@Args() args: FindManyEmploymentArgs) {
    return this.employmentsService.findAll(args)
  }

  @Query(() => Employment, { name: 'employment' })
  findOne(@Args() args: FindUniqueEmploymentArgs) {
    return this.employmentsService.findOne(args)
  }

  @Mutation(() => Employment)
  updateEmployment(@Args('updateEmploymentInput') args: UpdateEmploymentInput) {
    return this.employmentsService.update(args)
  }

  @Mutation(() => Employment)
  removeEmployment(@Args() args: FindUniqueEmploymentArgs) {
    return this.employmentsService.remove(args)
  }
}
