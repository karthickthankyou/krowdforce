import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { SubCategoriesService } from './sub-categories.service'
import { SubCategory } from './entity/sub-category.entity'
import { FindManySubCategoryArgs, FindUniqueSubCategoryArgs } from './dtos/find.args'
import { CreateSubCategoryInput } from './dtos/create-sub-category.input'
import { UpdateSubCategoryInput } from './dtos/update-sub-category.input'

@Resolver(() => SubCategory)
export class SubCategoriesResolver {
  constructor(private readonly subCategoriesService: SubCategoriesService) {}

  @Mutation(() => SubCategory)
  createSubCategory(@Args('createSubCategoryInput') args: CreateSubCategoryInput) {
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
  updateSubCategory(@Args('updateSubCategoryInput') args: UpdateSubCategoryInput) {
    return this.subCategoriesService.update(args)
  }

  @Mutation(() => SubCategory)
  removeSubCategory(@Args() args: FindUniqueSubCategoryArgs) {
    return this.subCategoriesService.remove(args)
  }
}
