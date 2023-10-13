import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { EmploymentsService } from './employments.service'
import { Employment } from './entity/employment.entity'
import {
  FindManyEmploymentArgs,
  FindUniqueEmploymentArgs,
} from './dtos/find.args'
import { CreateEmploymentInput } from './dtos/create-employment.input'
import { UpdateEmploymentInput } from './dtos/update-employment.input'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Job } from '../jobs/entity/job.entity'
import { Employee } from '../employees/entity/employee.entity'

@Resolver(() => Employment)
export class EmploymentsResolver {
  constructor(
    private readonly employmentsService: EmploymentsService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Employment)
  createEmployment(@Args('createEmploymentInput') args: CreateEmploymentInput) {
    return this.employmentsService.create(args)
  }

  @Query(() => [Employment], { name: 'employments' })
  findAll(@Args() args: FindManyEmploymentArgs) {
    return this.employmentsService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => [Employment], { name: 'myEmployments' })
  myEmployments(
    @Args() args: FindManyEmploymentArgs,
    @GetUser() user: GetUserType,
  ) {
    return this.prisma.employment.findMany({
      ...args,
      where: {
        ...args.where,
        employeeId: { equals: user.uid },
      },
    })
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

  @ResolveField(() => Job)
  job(@Parent() parent: Employment) {
    return this.prisma.job.findUnique({
      where: { id: parent.jobId },
    })
  }

  @ResolveField(() => Employee)
  employee(@Parent() parent: Employment) {
    return this.prisma.employee.findUnique({
      where: { uid: parent.employeeId },
    })
  }
}
