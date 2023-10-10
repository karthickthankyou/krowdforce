import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { EmployeeIdJobIdCompoundUniqueInput } from 'src/models/applications/dtos/where.args'
import { EmployeeRelationFilter } from 'src/models/employees/dtos/where.args'
import { JobRelationFilter } from 'src/models/jobs/dtos/where.args'

@InputType()
export class BookmarkWhereUniqueInput {
  employeeId_jobId: EmployeeIdJobIdCompoundUniqueInput
}

@InputType()
export class BookmarkWhereInputStrict
  implements
    RestrictProperties<BookmarkWhereInputStrict, Prisma.BookmarkWhereInput>
{
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  employeeId: StringFilter
  jobId: IntFilter
  employee: EmployeeRelationFilter
  job: JobRelationFilter

  AND: BookmarkWhereInput[]
  OR: BookmarkWhereInput[]
  NOT: BookmarkWhereInput[]
}

@InputType()
export class BookmarkWhereInput extends PartialType(BookmarkWhereInputStrict) {}

@InputType()
export class BookmarkListRelationFilter {
  every?: BookmarkWhereInput
  some?: BookmarkWhereInput
  none?: BookmarkWhereInput
}

@InputType()
export class BookmarkRelationFilter {
  is?: BookmarkWhereInput
  isNot?: BookmarkWhereInput
}
