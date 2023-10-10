import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Category } from '../categories/entity/category.entity'
import { Employee } from '../employees/entity/employee.entity'
import { Job } from '../jobs/entity/job.entity'
import { CreateSubCategoryInput } from './dtos/create-sub-category.input'
import {
  FindManySubCategoryArgs,
  FindUniqueSubCategoryArgs,
} from './dtos/find.args'
import { UpdateSubCategoryInput } from './dtos/update-sub-category.input'
import { SubCategory } from './entity/sub-category.entity'
import { SubCategoriesService } from './sub-categories.service'

@Resolver(() => SubCategory)
export class SubCategoriesResolver {
  constructor(
    private readonly subCategoriesService: SubCategoriesService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => SubCategory)
  createSubCategory(
    @Args('createSubCategoryInput') args: CreateSubCategoryInput,
  ) {
    return this.subCategoriesService.create(args)
  }

  @Query(() => [SubCategory], { name: 'subCategories' })
  findAll(@Args() args: FindManySubCategoryArgs) {
    return this.subCategoriesService.findAll(args)
  }

  @Query(() => SubCategory, { name: 'subCategory' })
  findOne(@Args() args: FindUniqueSubCategoryArgs) {
    return this.subCategoriesService.findOne(args)
  }

  @Mutation(() => SubCategory)
  updateSubCategory(
    @Args('updateSubCategoryInput') args: UpdateSubCategoryInput,
  ) {
    return this.subCategoriesService.update(args)
  }

  @Mutation(() => SubCategory)
  removeSubCategory(@Args() args: FindUniqueSubCategoryArgs) {
    return this.subCategoriesService.remove(args)
  }

  @ResolveField(() => [Job])
  jobs(@Parent() parent: SubCategory) {
    return this.prisma.job.findMany({
      where: { skills: { some: { name: parent.name } } },
    })
  }

  @ResolveField(() => [Employee])
  employees(@Parent() parent: SubCategory) {
    return this.prisma.employee.findMany({
      where: { skills: { some: { name: { equals: parent.name } } } },
    })
  }

  @ResolveField(() => Category)
  category(@Parent() parent: SubCategory) {
    return this.prisma.category.findUnique({
      where: { name: parent.categoryName },
    })
  }
}
