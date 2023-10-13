import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { SubCategoryWhereUniqueInput } from '../sub-categories/dtos/where.args'
import { CreateJobInput } from './dtos/create-job.input'
import { FindManyJobArgs, FindUniqueJobArgs } from './dtos/find.args'
import { UpdateJobInput } from './dtos/update-job.input'

@Injectable()
export class JobsService {
  constructor(private readonly prisma: PrismaService) {}
  create({
    skills,
    address,
    companyId,
    companyAddressId,
    employerId,
    shiftInformation,
    ...createJobInput
  }: CreateJobInput) {
    const skillsConnect: SubCategoryWhereUniqueInput[] = skills.map(
      (skill) => ({
        name: skill.name,
      }),
    )
    try {
      return this.prisma.job.create({
        data: {
          ...createJobInput,
          skills: { connect: skillsConnect },
          Employer: {
            connect: { uid: employerId },
          },
          ...(address
            ? { address: { create: address } }
            : { address: { connect: { id: companyAddressId } } }),
          Company: { connect: { id: companyId } },
          ...(shiftInformation
            ? {
                shiftInformation: {
                  create: shiftInformation,
                },
              }
            : null),
        },
      })
    } catch (error) {
      console.error('job create error ', error)
    }
  }

  findAll(args: FindManyJobArgs) {
    return this.prisma.job.findMany(args)
  }

  async findOne(args: FindUniqueJobArgs) {
    const job = await this.prisma.job.findUnique(args)
    console.log('job ', job)
    return job
  }

  update(updateJobInput: UpdateJobInput) {
    const { id, shiftInformation, ...data } = updateJobInput
    return this.prisma.job.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueJobArgs) {
    return this.prisma.job.delete(args)
  }
}
