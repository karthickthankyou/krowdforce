import { Injectable } from '@nestjs/common'
import {
  FindManyAttendanceArgs,
  FindUniqueAttendanceArgs,
} from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateAttendanceInput } from './dtos/create-attendance.input'
import { UpdateAttendanceInput } from './dtos/update-attendance.input'

@Injectable()
export class AttendancesService {
  constructor(private readonly prisma: PrismaService) {}
  create(data: CreateAttendanceInput) {
    return this.prisma.attendance.create({ data })
  }

  findAll(args: FindManyAttendanceArgs) {
    return this.prisma.attendance.findMany(args)
  }

  findOne(args: FindUniqueAttendanceArgs) {
    return this.prisma.attendance.findUnique(args)
  }

  update(updateAttendanceInput: UpdateAttendanceInput) {
    const { id, ...data } = updateAttendanceInput
    return this.prisma.attendance.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueAttendanceArgs) {
    return this.prisma.attendance.delete(args)
  }
}
