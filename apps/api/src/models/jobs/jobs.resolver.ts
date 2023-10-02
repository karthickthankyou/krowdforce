import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { JobsService } from './jobs.service'
import { Job } from './entity/job.entity'
import { FindManyJobArgs, FindUniqueJobArgs } from './dtos/find.args'
import { CreateJobInput } from './dtos/create-job.input'
import { UpdateJobInput } from './dtos/update-job.input'

@Resolver(() => Job)
export class JobsResolver {
  constructor(private readonly jobsService: JobsService) {}

  @Mutation(() => Job)
  createJob(@Args('createJobInput') args: CreateJobInput) {
    return this.jobsService.create(args)
  }

  @Query(() => [Job], { name: 'jobs' })
  findAll(@Args() args: FindManyJobArgs) {
    return this.jobsService.findAll(args)
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
}
