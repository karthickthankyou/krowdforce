import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { SubCategoryListRelationFilter } from 'src/models/sub-categories/dtos/where.args'
import { UserRelationFilter } from 'src/models/users/dtos/where.args'

@InputType()
export class EmployeeWhereUniqueInput {
  uid: string
}

@InputType()
export class EmployeeWhereInputStrict
  implements
    RestrictProperties<EmployeeWhereInputStrict, Prisma.EmployeeWhereInput>
{
  uid: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  user: UserRelationFilter
  skills: SubCategoryListRelationFilter

  AND: EmployeeWhereInput[]
  OR: EmployeeWhereInput[]
  NOT: EmployeeWhereInput[]
}

@InputType()
export class EmployeeWhereInput extends PartialType(EmployeeWhereInputStrict) {}

@InputType()
export class EmployeeListRelationFilter {
  every?: EmployeeWhereInput
  some?: EmployeeWhereInput
  none?: EmployeeWhereInput
}

@InputType()
export class EmployeeRelationFilter {
  is?: EmployeeWhereInput
  isNot?: EmployeeWhereInput
}
