import { InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { AddressRelationFilter } from 'src/models/addresses/dtos/where.args'
import { ApplicationListRelationFilter } from 'src/models/applications/dtos/where.args'
import { AttendanceListRelationFilter } from 'src/models/attendances/dtos/where.args'
import { BookmarkListRelationFilter } from 'src/models/bookmarks/dtos/where.args'
import { EmploymentListRelationFilter } from 'src/models/employments/dtos/where.args'
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
  Attendance: AttendanceListRelationFilter
  Employment: EmploymentListRelationFilter
  contactInfo: StringFilter
  addressId: IntFilter
  address: AddressRelationFilter
  about: StringFilter
  Bookmark: BookmarkListRelationFilter
  Application: ApplicationListRelationFilter
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
