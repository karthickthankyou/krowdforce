import { InputType, PickType } from '@nestjs/graphql';
import { SubCategory } from '../entity/sub-category.entity';

@InputType()
export class CreateSubCategoryInput extends PickType(
  SubCategory,
  ['categoryName', 'name'],
  InputType,
) {}
