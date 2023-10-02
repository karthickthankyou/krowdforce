import { Injectable } from '@nestjs/common';
import { FindManyEmployeeArgs, FindUniqueEmployeeArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateEmployeeInput } from './dtos/create-employee.input';
import { UpdateEmployeeInput } from './dtos/update-employee.input';

@Injectable()
export class EmployeesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createEmployeeInput: CreateEmployeeInput) {
    return this.prisma.employee.create({
      data: createEmployeeInput,
    });
  }

  findAll(args: FindManyEmployeeArgs) {
    return this.prisma.employee.findMany(args);
  }

  findOne(args: FindUniqueEmployeeArgs) {
    return this.prisma.employee.findUnique(args);
  }

  update(updateEmployeeInput: UpdateEmployeeInput) {
    const { uid, ...data } = updateEmployeeInput;
    return this.prisma.employee.update({
      where: { uid },
      data: data,
    });
  }

  remove(args: FindUniqueEmployeeArgs) {
    return this.prisma.employee.delete(args);
  }
}
