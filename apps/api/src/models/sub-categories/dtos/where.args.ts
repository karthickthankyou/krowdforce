import { InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties, StringFilter } from 'src/common/dtos/common.input'
import { CategoryRelationFilter } from 'src/models/categories/dtos/where.args'
import { EmployeeListRelationFilter } from 'src/models/employees/dtos/where.args'
import { JobListRelationFilter } from 'src/models/jobs/dtos/where.args'

@InputType()
export class SubCategoryWhereUniqueInput {
  name: string
}

@InputType()
export class SubCategoryWhereInputStrict
  implements
    RestrictProperties<
      SubCategoryWhereInputStrict,
      Prisma.SubCategoryWhereInput
    >
{
  name: StringFilter
  categoryName: StringFilter
  category: CategoryRelationFilter
  employees: EmployeeListRelationFilter
  jobs: JobListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: SubCategoryWhereInput[]
  OR: SubCategoryWhereInput[]
  NOT: SubCategoryWhereInput[]
}

@InputType()
export class SubCategoryWhereInput extends PartialType(
  SubCategoryWhereInputStrict,
) {}

@InputType()
export class SubCategoryListRelationFilter {
  every?: SubCategoryWhereInput
  some?: SubCategoryWhereInput
  none?: SubCategoryWhereInput
}

@InputType()
export class SubCategoryRelationFilter {
  is?: SubCategoryWhereInput
  isNot?: SubCategoryWhereInput
}
