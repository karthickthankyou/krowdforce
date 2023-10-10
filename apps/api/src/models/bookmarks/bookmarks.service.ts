import { Injectable } from '@nestjs/common'
import { FindManyBookmarkArgs, FindUniqueBookmarkArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateBookmarkInput } from './dtos/create-bookmark.input'
import { UpdateBookmarkInput } from './dtos/update-bookmark.input'

@Injectable()
export class BookmarksService {
  constructor(private readonly prisma: PrismaService) {}
  create({ employeeId, jobId }: CreateBookmarkInput) {
    console.log('createBookmarkInput', { employeeId, jobId })
    return this.prisma.bookmark.create({
      data: { employeeId, jobId },
    })
  }

  findAll(args: FindManyBookmarkArgs) {
    return this.prisma.bookmark.findMany(args)
  }

  findOne(args: FindUniqueBookmarkArgs) {
    return this.prisma.bookmark.findUnique(args)
  }

  update(updateBookmarkInput: UpdateBookmarkInput) {
    const { employeeId_jobId, ...data } = updateBookmarkInput
    return this.prisma.bookmark.update({
      where: { employeeId_jobId },
      data: data,
    })
  }

  remove(args: FindUniqueBookmarkArgs) {
    return this.prisma.bookmark.delete(args)
  }
}
