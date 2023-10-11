import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateEmployeeInput } from './dtos/create-employee.input'
import { FindManyEmployeeArgs, FindUniqueEmployeeArgs } from './dtos/find.args'
import { UpdateEmployeeInput } from './dtos/update-employee.input'

@Injectable()
export class EmployeesService {
  constructor(private readonly prisma: PrismaService) {}
  create({ address, about, uid, skills }: CreateEmployeeInput) {
    try {
      return this.prisma.employee.create({
        data: {
          about,
          user: { connect: { uid } },
          address: { create: address },
          skills: { connect: skills.map((skill) => ({ name: skill })) },
        },
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  findAll(args: FindManyEmployeeArgs) {
    return this.prisma.employee.findMany(args)
  }

  findOne(args: FindUniqueEmployeeArgs) {
    return this.prisma.employee.findUnique(args)
  }

  update(updateEmployeeInput: UpdateEmployeeInput) {
    const { uid, skills, address, ...data } = updateEmployeeInput
    return this.prisma.employee.update({
      where: { uid },
      data: data,
    })
  }

  remove(args: FindUniqueEmployeeArgs) {
    return this.prisma.employee.delete(args)
  }
}
