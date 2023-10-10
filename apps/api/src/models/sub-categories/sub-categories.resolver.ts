import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { SubCategoriesService } from './sub-categories.service'
import { SubCategory } from './entity/sub-category.entity'
import {
  FindManySubCategoryArgs,
  FindUniqueSubCategoryArgs,
} from './dtos/find.args'
import { CreateSubCategoryInput } from './dtos/create-sub-category.input'
import { UpdateSubCategoryInput } from './dtos/update-sub-category.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Job } from '../jobs/entity/job.entity'
import { Employee } from '../employees/entity/employee.entity'
import { Category } from '../categories/entity/category.entity'

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
      where: {},
    })
  }

  @ResolveField(() => Category)
  category(@Parent() parent: SubCategory) {
    return this.prisma.category.findUnique({
      where: { name: parent.categoryName },
    })
  }
}
