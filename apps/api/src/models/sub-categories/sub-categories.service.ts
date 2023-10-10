import { Injectable } from '@nestjs/common'
import {
  FindManySubCategoryArgs,
  FindUniqueSubCategoryArgs,
} from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateSubCategoryInput } from './dtos/create-sub-category.input'
import { UpdateSubCategoryInput } from './dtos/update-sub-category.input'

@Injectable()
export class SubCategoriesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createSubCategoryInput: CreateSubCategoryInput) {
    return this.prisma.subCategory.create({
      data: createSubCategoryInput,
    })
  }

  findAll(args: FindManySubCategoryArgs) {
    return this.prisma.subCategory.findMany(args)
  }

  findOne(args: FindUniqueSubCategoryArgs) {
    return this.prisma.subCategory.findUnique(args)
  }

  update(updateSubCategoryInput: UpdateSubCategoryInput) {
    const { name, ...data } = updateSubCategoryInput
    return this.prisma.subCategory.update({
      where: { name },
      data: data,
    })
  }

  remove(args: FindUniqueSubCategoryArgs) {
    return this.prisma.subCategory.delete(args)
  }
}
