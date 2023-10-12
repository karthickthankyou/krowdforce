import { Injectable } from '@nestjs/common'
import { FindManyFollowArgs, FindUniqueFollowArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateFollowInput } from './dtos/create-follow.input'
import { UpdateFollowInput } from './dtos/update-follow.input'

@Injectable()
export class FollowsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createFollowInput: CreateFollowInput) {
    return this.prisma.follow.create({
      data: createFollowInput,
    })
  }

  findAll(args: FindManyFollowArgs) {
    return this.prisma.follow.findMany(args)
  }

  findOne(args: FindUniqueFollowArgs) {
    return this.prisma.follow.findUnique(args)
  }

  update(updateFollowInput: UpdateFollowInput) {
    const { id, ...data } = updateFollowInput
    return this.prisma.follow.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueFollowArgs) {
    return this.prisma.follow.delete(args)
  }
}
