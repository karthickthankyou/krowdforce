import { Injectable } from '@nestjs/common'
import {
  FindManyEmploymentArgs,
  FindUniqueEmploymentArgs,
} from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateEmploymentInput } from './dtos/create-employment.input'
import { UpdateEmploymentInput } from './dtos/update-employment.input'
import { ApplicationStatus } from '@prisma/client'

@Injectable()
export class EmploymentsService {
  constructor(private readonly prisma: PrismaService) {}
  async create({
    jobId,
    employeeId,
    companyId,
    startDate,
  }: CreateEmploymentInput) {
    const updateApplication = this.prisma.application.update({
      data: {
        status: ApplicationStatus.EMPLOYED,
      },
      where: {
        employeeId_jobId: {
          employeeId,
          jobId,
        },
      },
    })
    const createEmployment = this.prisma.employment.create({
      data: {
        companyId,
        startDate,
        employeeId,
      },
    })
    const [application, employment] = await this.prisma.$transaction([
      updateApplication,
      createEmployment,
    ])

    return employment
  }

  findAll(args: FindManyEmploymentArgs) {
    return this.prisma.employment.findMany(args)
  }

  findOne(args: FindUniqueEmploymentArgs) {
    return this.prisma.employment.findUnique(args)
  }

  update(updateEmploymentInput: UpdateEmploymentInput) {
    const { id, ...data } = updateEmploymentInput
    return this.prisma.employment.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueEmploymentArgs) {
    return this.prisma.employment.delete(args)
  }
}
