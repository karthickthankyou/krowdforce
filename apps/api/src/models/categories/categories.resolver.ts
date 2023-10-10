import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { SubCategory } from '../sub-categories/entity/sub-category.entity'
import { CategoriesService } from './categories.service'
import { CreateCategoryInput } from './dtos/create-category.input'
import { FindManyCategoryArgs, FindUniqueCategoryArgs } from './dtos/find.args'
import { UpdateCategoryInput } from './dtos/update-category.input'
import { Category } from './entity/category.entity'

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Category)
  createCategory(@Args('createCategoryInput') args: CreateCategoryInput) {
    return this.categoriesService.create(args)
  }

  @Query(() => [Category], { name: 'categories' })
  findAll(@Args() args: FindManyCategoryArgs) {
    return this.categoriesService.findAll(args)
  }

  @Query(() => Category, { name: 'category' })
  findOne(@Args() args: FindUniqueCategoryArgs) {
    return this.categoriesService.findOne(args)
  }

  @Mutation(() => Category)
  updateCategory(@Args('updateCategoryInput') args: UpdateCategoryInput) {
    return this.categoriesService.update(args)
  }

  @Mutation(() => Category)
  removeCategory(@Args() args: FindUniqueCategoryArgs) {
    return this.categoriesService.remove(args)
  }

  @ResolveField(() => [SubCategory])
  subCategories(@Parent() parent: Category) {
    return this.prisma.subCategory.findMany({
      where: { category: { name: parent.name } },
    })
  }
}
