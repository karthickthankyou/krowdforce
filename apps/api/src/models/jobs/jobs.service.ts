import { Injectable } from '@nestjs/common';
import { FindManyJobArgs, FindUniqueJobArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateJobInput } from './dtos/create-job.input';
import { UpdateJobInput } from './dtos/update-job.input';
import { SubCategoryWhereUniqueInput } from '../sub-categories/dtos/where.args';

@Injectable()
export class JobsService {
  constructor(private readonly prisma: PrismaService) {}
  create({ skills, address, companyId, ...createJobInput }: CreateJobInput) {
    const skillsConnect: SubCategoryWhereUniqueInput[] = skills.map(
      (skill) => ({
        name: skill.name,
      }),
    );
    try {
      return this.prisma.job.create({
        data: {
          ...createJobInput,
          skills: { connect: skillsConnect },
          ...(address ? { address: { create: address } } : null),
          Company: { connect: { id: companyId } },
        },
      });
    } catch (error) {
      console.error('job create error ', error);
    }
  }

  findAll(args: FindManyJobArgs) {
    return this.prisma.job.findMany(args);
  }

  findOne(args: FindUniqueJobArgs) {
    return this.prisma.job.findUnique(args);
  }

  update(updateJobInput: UpdateJobInput) {
    const { id, ...data } = updateJobInput;
    return this.prisma.job.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniqueJobArgs) {
    return this.prisma.job.delete(args);
  }
}
