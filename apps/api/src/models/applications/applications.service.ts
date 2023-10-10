import { Injectable } from '@nestjs/common'
import {
  FindManyApplicationArgs,
  FindUniqueApplicationArgs,
} from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateApplicationInput } from './dtos/create-application.input'
import { UpdateApplicationInput } from './dtos/update-application.input'

@Injectable()
export class ApplicationsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createApplicationInput: CreateApplicationInput) {
    return this.prisma.application.create({
      data: createApplicationInput,
    })
  }

  findAll(args: FindManyApplicationArgs) {
    return this.prisma.application.findMany(args)
  }

  findOne(args: FindUniqueApplicationArgs) {
    return this.prisma.application.findUnique(args)
  }

  update(updateApplicationInput: UpdateApplicationInput) {
    const { employeeId_jobId, ...data } = updateApplicationInput
    return this.prisma.application.update({
      where: { employeeId_jobId },
      data: data,
    })
  }

  remove(args: FindUniqueApplicationArgs) {
    return this.prisma.application.delete(args)
  }
}
