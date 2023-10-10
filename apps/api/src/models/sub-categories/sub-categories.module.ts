import { Module } from '@nestjs/common'
import { SubCategoriesResolver } from './sub-categories.resolver'
import { SubCategoriesService } from './sub-categories.service'

@Module({
  providers: [SubCategoriesResolver, SubCategoriesService],
  exports: [SubCategoriesService],
})
export class SubCategoriesModule {}
