import { InputType, PickType } from '@nestjs/graphql';
import { Category } from '../entity/category.entity';

@InputType()
export class CreateCategoryInput extends PickType(
  Category,
  ['name'],
  InputType,
) {}
