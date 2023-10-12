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
import { Company } from '../companies/entity/company.entity'
import { Job } from '../jobs/entity/job.entity'
import { User } from '../users/entity/user.entity'
import { CreateEmployerInput } from './dtos/create-employer.input'
import { FindManyEmployerArgs, FindUniqueEmployerArgs } from './dtos/find.args'
import { UpdateEmployerInput } from './dtos/update-employer.input'
import { EmployersService } from './employers.service'
import { Employer, EmployerStats } from './entity/employer.entity'

@Resolver(() => Employer)
export class EmployersResolver {
  constructor(
    private readonly employersService: EmployersService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Employer, { nullable: true })
  createEmployer(@Args('createEmployerInput') args: CreateEmployerInput) {
    return this.employersService.create(args)
  }

  @Query(() => [Employer], { name: 'employers' })
  findAll(@Args() args: FindManyEmployerArgs) {
    return this.employersService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => [Employer], { name: 'companyEmployers' })
  companyEmployers(
    @Args() args: FindManyEmployerArgs,
    @GetUser() user: GetUserType,
  ) {
    return this.prisma.employer.findMany({
      ...args,
      where: {
        ...args.where,
        company: { Employer: { some: { uid: { equals: user.uid } } } },
      },
    })
  }

  @AllowAuthenticated()
  @Query(() => EmployerStats, { name: 'companyStats' })
  async companyStats(@GetUser() user: GetUserType): Promise<EmployerStats> {
    const employer = await this.prisma.employer.findUnique({
      where: { uid: user.uid },
    })

    const { companyId } = employer

    const [jobs, applicationStatusCounts] = await Promise.all([
      this.prisma.job.groupBy({
        by: ['status'],
        _count: {
          status: true,
        },
        where: {
          companyId,
        },
      }),
      this.prisma.application.groupBy({
        by: ['status'],
        _count: {
          status: true,
        },
        where: {
          job: { companyId },
        },
      }),
    ])

    console.log('appications', applicationStatusCounts)

    return {
      jobs: jobs.map((item) => ({
        name: item.status,
        count: item._count.status,
      })),
      applications: applicationStatusCounts.map((item) => ({
        name: item.status,
        count: item._count.status,
      })),
    }
  }

  @Query(() => Employer, { name: 'employer' })
  findOne(@Args() args: FindUniqueEmployerArgs) {
    return this.employersService.findOne(args)
  }

  @AllowAuthenticated()
  @Query(() => Employer, { name: 'employerMe' })
  employerMe(@GetUser() user: GetUserType) {
    return this.employersService.findOne({
      where: { uid: user.uid },
    })
  }

  @Mutation(() => Employer)
  updateEmployer(@Args('updateEmployerInput') args: UpdateEmployerInput) {
    return this.employersService.update(args)
  }

  @Mutation(() => Employer)
  removeEmployer(@Args() args: FindUniqueEmployerArgs) {
    return this.employersService.remove(args)
  }

  @ResolveField(() => User)
  user(@Parent() parent: User) {
    return this.prisma.user.findUnique({ where: { uid: parent.uid } })
  }

  @ResolveField(() => Company, { nullable: true })
  company(@Parent() parent: Employer) {
    if (!parent.companyId) {
      return null
    }
    return this.prisma.company.findUnique({ where: { id: parent.companyId } })
  }

  @ResolveField(() => [Job])
  jobs(@Parent() parent: Employer) {
    return this.prisma.job.findMany({ where: { employerId: parent.uid } })
  }
}
