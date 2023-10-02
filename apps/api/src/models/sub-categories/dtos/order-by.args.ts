import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { CategoryOrderByWithRelationInput } from 'src/models/categories/dtos/order-by.args';
import { EmployeeOrderByRelationAggregateInput } from 'src/models/employees/dtos/order-by.args';
import { JobOrderByRelationAggregateInput } from 'src/models/jobs/dtos/order-by.args';

@InputType()
export class SubCategoryOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      SubCategoryOrderByWithRelationInputStrict,
      Prisma.SubCategoryOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  name: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  categoryName: Prisma.SortOrder;
  Category: CategoryOrderByWithRelationInput;
  employees: EmployeeOrderByRelationAggregateInput;
  jobs: JobOrderByRelationAggregateInput;
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class SubCategoryOrderByWithRelationInput extends PartialType(
  SubCategoryOrderByWithRelationInputStrict,
) {}

@InputType()
export class SubCategoryOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder;
}
