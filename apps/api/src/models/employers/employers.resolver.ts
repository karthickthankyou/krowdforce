import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { EmployersService } from './employers.service'
import { Employer } from './entity/employer.entity'
import { FindManyEmployerArgs, FindUniqueEmployerArgs } from './dtos/find.args'
import { CreateEmployerInput } from './dtos/create-employer.input'
import { UpdateEmployerInput } from './dtos/update-employer.input'

@Resolver(() => Employer)
export class EmployersResolver {
  constructor(private readonly employersService: EmployersService) {}

  @Mutation(() => Employer)
  createEmployer(@Args('createEmployerInput') args: CreateEmployerInput) {
    return this.employersService.create(args)
  }

  @Query(() => [Employer], { name: 'employers' })
  findAll(@Args() args: FindManyEmployerArgs) {
    return this.employersService.findAll(args)
  }

  @Query(() => Employer, { name: 'employer' })
  findOne(@Args() args: FindUniqueEmployerArgs) {
    return this.employersService.findOne(args)
  }

  @Mutation(() => Employer)
  updateEmployer(@Args('updateEmployerInput') args: UpdateEmployerInput) {
    return this.employersService.update(args)
  }

  @Mutation(() => Employer)
  removeEmployer(@Args() args: FindUniqueEmployerArgs) {
    return this.employersService.remove(args)
  }
}
