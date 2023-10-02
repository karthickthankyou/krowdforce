import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { JobsService } from './jobs.service';
import { Job } from './entity/job.entity';
import { FindManyJobArgs, FindUniqueJobArgs } from './dtos/find.args';
import { CreateJobInput } from './dtos/create-job.input';
import { UpdateJobInput } from './dtos/update-job.input';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Employer } from '../employers/entity/employer.entity';
import { Address } from '../addresses/entity/address.entity';
import { SubCategory } from '../sub-categories/entity/sub-category.entity';

@Resolver(() => Job)
export class JobsResolver {
  constructor(
    private readonly jobsService: JobsService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Job)
  createJob(@Args('createJobInput') args: CreateJobInput) {
    return this.jobsService.create(args);
  }

  @Query(() => [Job], { name: 'jobs' })
  findAll(@Args() args: FindManyJobArgs) {
    return this.jobsService.findAll(args);
  }

  @Query(() => Job, { name: 'job' })
  findOne(@Args() args: FindUniqueJobArgs) {
    return this.jobsService.findOne(args);
  }

  @Mutation(() => Job)
  updateJob(@Args('updateJobInput') args: UpdateJobInput) {
    return this.jobsService.update(args);
  }

  @Mutation(() => Job)
  removeJob(@Args() args: FindUniqueJobArgs) {
    return this.jobsService.remove(args);
  }

  @ResolveField(() => Employer)
  employer(@Parent() parent: Job) {
    return this.prisma.employer.findUnique({
      where: { uid: parent.employerId },
    });
  }

  @ResolveField(() => Address, { nullable: true })
  address(@Parent() parent: Job) {
    return this.prisma.address.findUnique({
      where: { id: parent.addressId },
    });
  }

  @ResolveField(() => [SubCategory])
  skills(@Parent() parent: Job) {
    return this.prisma.subCategory.findMany({
      where: { jobs: { some: { employerId: parent.employerId } } },
    });
  }
}
