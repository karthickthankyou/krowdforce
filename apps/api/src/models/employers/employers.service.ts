import { Injectable } from '@nestjs/common';
import { FindManyEmployerArgs, FindUniqueEmployerArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateEmployerInput } from './dtos/create-employer.input';
import { UpdateEmployerInput } from './dtos/update-employer.input';

@Injectable()
export class EmployersService {
  constructor(private readonly prisma: PrismaService) {}
  create({ company, uid }: CreateEmployerInput) {
    return this.prisma.employer.create({
      data: {
        user: { connectOrCreate: { create: { uid }, where: { uid } } },
        company: { create: { name: company.name } },
      },
    });
  }

  findAll(args: FindManyEmployerArgs) {
    return this.prisma.employer.findMany(args);
  }

  findOne(args: FindUniqueEmployerArgs) {
    return this.prisma.employer.findUnique(args);
  }

  update(updateEmployerInput: UpdateEmployerInput) {
    const { uid, company, ...data } = updateEmployerInput;
    return this.prisma.employer.update({
      where: { uid },
      data: data,
    });
  }

  remove(args: FindUniqueEmployerArgs) {
    return this.prisma.employer.delete(args);
  }
}
