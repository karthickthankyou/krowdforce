import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateEmployerInput } from './dtos/create-employer.input'
import { FindManyEmployerArgs, FindUniqueEmployerArgs } from './dtos/find.args'
import { UpdateEmployerInput } from './dtos/update-employer.input'

@Injectable()
export class EmployersService {
  constructor(private readonly prisma: PrismaService) {}
  create({ company, uid, address }: CreateEmployerInput) {
    return this.prisma.employer.create({
      data: {
        user: { connectOrCreate: { create: { uid }, where: { uid } } },
        company: {
          create: { name: company.name, address: { create: address } },
        },
      },
    })
  }

  findAll(args: FindManyEmployerArgs) {
    return this.prisma.employer.findMany(args)
  }

  findOne(args: FindUniqueEmployerArgs) {
    return this.prisma.employer.findUnique(args)
  }

  update(updateEmployerInput: UpdateEmployerInput) {
    const { uid, ...data } = updateEmployerInput
    return this.prisma.employer.update({
      where: { uid },
      data: data,
    })
  }

  remove(args: FindUniqueEmployerArgs) {
    return this.prisma.employer.delete(args)
  }
}
