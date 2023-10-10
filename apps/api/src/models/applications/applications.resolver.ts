import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'
import { ApplicationsService } from './applications.service'
import { Application } from './entity/application.entity'
import {
  FindManyApplicationArgs,
  FindUniqueApplicationArgs,
} from './dtos/find.args'
import { CreateApplicationInput } from './dtos/create-application.input'
import { UpdateApplicationInput } from './dtos/update-application.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Employee } from '../employees/entity/employee.entity'
import { Job } from '../jobs/entity/job.entity'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/guards'

@Resolver(() => Application)
export class ApplicationsResolver {
  constructor(
    private readonly applicationsService: ApplicationsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Application)
  createApplication(
    @Args('createApplicationInput') args: CreateApplicationInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.employeeId)
    return this.applicationsService.create(args)
  }

  @Query(() => [Application], { name: 'applications' })
  findAll(@Args() args: FindManyApplicationArgs) {
    return this.applicationsService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => [Application], { name: 'myApplications' })
  myApplications(
    @Args() args: FindManyApplicationArgs,
    @GetUser() user: GetUserType,
  ) {
    return this.applicationsService.findAll({
      ...args,
      where: { ...args.where, employeeId: { equals: user.uid } },
    })
  }

  @Query(() => Application, { name: 'application' })
  findOne(@Args() args: FindUniqueApplicationArgs) {
    return this.applicationsService.findOne(args)
  }

  @Mutation(() => Application)
  updateApplication(
    @Args('updateApplicationInput') args: UpdateApplicationInput,
  ) {
    return this.applicationsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Application)
  removeApplication(
    @Args() args: FindUniqueApplicationArgs,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.where.employeeId_jobId.employeeId)
    return this.applicationsService.remove(args)
  }

  @ResolveField(() => Employee)
  employee(@Parent() parent: Application) {
    return this.prisma.employee.findUnique({
      where: { uid: parent.employeeId },
    })
  }

  @ResolveField(() => Job)
  job(@Parent() parent: Application) {
    return this.prisma.job.findUnique({ where: { id: parent.jobId } })
  }
}
