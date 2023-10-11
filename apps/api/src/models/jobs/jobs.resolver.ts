import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateJobInput } from './dtos/create-job.input'
import { FindManyJobArgs, FindUniqueJobArgs, JobFilter } from './dtos/find.args'
import { UpdateJobInput } from './dtos/update-job.input'
import { Job } from './entity/job.entity'
import { JobsService } from './jobs.service'

import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import {
  AggregateCountOutput,
  LocationFilterInput,
} from 'src/common/dtos/common.input'
import { GetUserType } from 'src/common/types'
import { Address } from '../addresses/entity/address.entity'
import { Company } from '../companies/entity/company.entity'
import { Employer } from '../employers/entity/employer.entity'
import { SubCategory } from '../sub-categories/entity/sub-category.entity'
import { Application } from '../applications/entity/application.entity'
import { Bookmark } from '../bookmarks/entity/bookmark.entity'
import { BadRequestException } from '@nestjs/common'

@Resolver(() => Job)
export class JobsResolver {
  constructor(
    private readonly jobsService: JobsService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Job)
  createJob(@Args('createJobInput') args: CreateJobInput) {
    return this.jobsService.create(args)
  }

  @Query(() => [Job], { name: 'jobs' })
  findAll(@Args() args: FindManyJobArgs) {
    return this.jobsService.findAll(args)
  }

  @Query(() => [Job], { name: 'searchJobs' })
  async searchJobs(
    @Args('locationFilter') locationFilter: LocationFilterInput,
    @Args('jobFilter', { nullable: true }) args: JobFilter,
  ) {
    try {
      const { ne_lat, ne_lng, sw_lat, sw_lng } = locationFilter
      console.log('locationFilter', locationFilter)
      const { where = {}, ...jobFilter } = args || {}

      const jobs = await this.prisma.job.findMany({
        ...jobFilter,
        where: {
          ...where,
          address: {
            lat: { lte: ne_lat, gte: sw_lat },
            lng: { lte: ne_lng, gte: sw_lng },
          },
          status: {
            equals: 'OPEN',
          },
        },
      })
      console.log('jobs ', where, args.skip, args.take, jobs)
      return jobs
    } catch (error) {
      console.error('Error in searchJobs:', error)
      throw new Error('Error in searchJobs: ' + error.message)
    }
  }

  @Query(() => AggregateCountOutput, { name: 'jobAggregate' })
  async jobAggregate(
    @Args('jobFilter', { nullable: true }) { where }: JobFilter,
    @Args('locationFilter') locationFilter: LocationFilterInput,
  ) {
    const { ne_lat, ne_lng, sw_lat, sw_lng } = locationFilter

    const jobsCount = await this.prisma.job.aggregate({
      _count: { _all: true },
      where: {
        ...where,
        address: {
          lat: { lte: ne_lat, gte: sw_lat },
          lng: { lte: ne_lng, gte: sw_lng },
        },
        status: {
          equals: 'OPEN',
        },
      },
    })

    return { count: jobsCount._count._all }
  }

  @AllowAuthenticated()
  @Query(() => [Job], { name: 'employerJobs' })
  async employerJobs(
    @Args() args: FindManyJobArgs,
    @GetUser() user: GetUserType,
  ) {
    const employer = await this.prisma.employer.findUnique({
      where: { uid: user.uid },
    })

    return this.jobsService.findAll({
      ...args,
      where: { ...args.where, employerId: { equals: employer.uid } },
    })
  }

  @AllowAuthenticated()
  @Query(() => [Job], { name: 'companyJobs' })
  async companyJobs(
    @Args() args: FindManyJobArgs,
    @GetUser() user: GetUserType,
  ) {
    const employer = await this.prisma.employer.findUnique({
      where: { uid: user.uid },
    })

    return this.jobsService.findAll({
      ...args,
      where: { ...args.where, companyId: { equals: employer.companyId } },
    })
  }

  @Query(() => Job, { name: 'job' })
  findOne(@Args() args: FindUniqueJobArgs) {
    return this.jobsService.findOne(args)
  }

  @Mutation(() => Job)
  updateJob(@Args('updateJobInput') args: UpdateJobInput) {
    return this.jobsService.update(args)
  }

  @Mutation(() => Job)
  removeJob(@Args() args: FindUniqueJobArgs) {
    return this.jobsService.remove(args)
  }

  @ResolveField(() => Address, { nullable: true })
  address(@Parent() parent: Job) {
    return this.prisma.address.findUnique({
      where: { id: parent.addressId },
    })
  }

  @ResolveField(() => [SubCategory])
  skills(@Parent() parent: Job) {
    return this.prisma.subCategory.findMany({
      where: { jobs: { some: { id: parent.id } } },
    })
  }

  @ResolveField(() => Company)
  company(@Parent() parent: Job) {
    return this.prisma.company.findUnique({
      where: { id: parent.companyId },
    })
  }

  @ResolveField(() => Employer, { nullable: true })
  employer(@Parent() parent: Job) {
    if (!parent.employerId) {
      return null
    }
    return this.prisma.employer.findUnique({
      where: { uid: parent.employerId },
    })
  }

  @AllowAuthenticated()
  @ResolveField(() => [Application])
  async applications(@Parent() parent: Job, @GetUser() user: GetUserType) {
    const employer = await this.prisma.employer.findUnique({
      where: { uid: user.uid },
    })
    if (parent.companyId !== employer.companyId) {
      throw new BadRequestException(
        'You are not authorized to view the applications.',
      )
    }
    return this.prisma.application.findMany({
      where: { jobId: parent.id },
    })
  }

  @AllowAuthenticated()
  @ResolveField(() => Int)
  async applicationsCount(@Parent() parent: Job, @GetUser() user: GetUserType) {
    const employer = await this.prisma.employer.findUnique({
      where: { uid: user.uid },
    })
    if (parent.companyId !== employer.companyId) {
      throw new BadRequestException(
        'You are not authorized to view the applications.',
      )
    }
    return this.prisma.application.count({
      where: { jobId: parent.id },
    })
  }

  @ResolveField(() => [Bookmark])
  bookmarks(@Parent() parent: Job) {
    return this.prisma.bookmark.findMany({
      where: { jobId: parent.id },
    })
  }
}
