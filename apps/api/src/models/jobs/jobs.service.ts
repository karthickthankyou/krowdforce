import { Injectable } from '@nestjs/common'
import { FindManyJobArgs, FindUniqueJobArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateJobInput } from './dtos/create-job.input'
import { UpdateJobInput } from './dtos/update-job.input'

@Injectable()
export class JobsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createJobInput: CreateJobInput) {
    return this.prisma.job.create({
      data: createJobInput,
    })
  }

  findAll(args: FindManyJobArgs) {
    return this.prisma.job.findMany(args)
  }

  findOne(args: FindUniqueJobArgs) {
    return this.prisma.job.findUnique(args)
  }

  update(updateJobInput: UpdateJobInput) {
    const { id, ...data } = updateJobInput
    return this.prisma.job.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueJobArgs) {
    return this.prisma.job.delete(args)
  }
}
