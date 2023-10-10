import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { JobsService } from './jobs.service'
import { Job } from './entity/job.entity'
import { FindManyJobArgs, FindUniqueJobArgs, JobFilter } from './dtos/find.args'
import { CreateJobInput } from './dtos/create-job.input'
import { UpdateJobInput } from './dtos/update-job.input'
import { PrismaService } from 'src/common/prisma/prisma.service'

import { Address } from '../addresses/entity/address.entity'
import { SubCategory } from '../sub-categories/entity/sub-category.entity'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { Company } from '../companies/entity/company.entity'
import { LocationFilterInput } from 'src/common/dtos/common.input'

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

      return this.prisma.job.findMany({
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
    } catch (error) {
      console.error('Error in searchJobs:', error)
      throw new Error('Error in searchJobs: ' + error.message)
    }
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
}
