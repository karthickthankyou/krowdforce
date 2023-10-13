import { Injectable } from '@nestjs/common'
import {
  FindManyShiftInformationArgs,
  FindUniqueShiftInformationArgs,
} from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateShiftInformationInput } from './dtos/create-shift-information.input'
import { UpdateShiftInformationInput } from './dtos/update-shift-information.input'

@Injectable()
export class ShiftInformationsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createShiftInformationInput: CreateShiftInformationInput) {
    return this.prisma.shiftInformation.create({
      data: createShiftInformationInput,
    })
  }

  findAll(args: FindManyShiftInformationArgs) {
    return this.prisma.shiftInformation.findMany(args)
  }

  findOne(args: FindUniqueShiftInformationArgs) {
    return this.prisma.shiftInformation.findUnique(args)
  }

  update(updateShiftInformationInput: UpdateShiftInformationInput) {
    const { jobId, ...data } = updateShiftInformationInput
    return this.prisma.shiftInformation.update({
      where: { jobId },
      data: data,
    })
  }

  remove(args: FindUniqueShiftInformationArgs) {
    return this.prisma.shiftInformation.delete(args)
  }
}
