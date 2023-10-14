import {
  Field,
  InputType,
  PartialType,
  registerEnumType,
} from '@nestjs/graphql'
import { $Enums, Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  FloatFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { AddressRelationFilter } from 'src/models/addresses/dtos/where.args'
import { ApplicationListRelationFilter } from 'src/models/applications/dtos/where.args'
import { AttendanceListRelationFilter } from 'src/models/attendances/dtos/where.args'
import { BookmarkListRelationFilter } from 'src/models/bookmarks/dtos/where.args'
import { CompanyRelationFilter } from 'src/models/companies/dtos/where.args'
import { EmployerRelationFilter } from 'src/models/employers/dtos/where.args'
import { EmploymentListRelationFilter } from 'src/models/employments/dtos/where.args'
import { ShiftInformationRelationFilter } from 'src/models/shift-informations/dtos/where.args'
import { SubCategoryListRelationFilter } from 'src/models/sub-categories/dtos/where.args'

@InputType()
export class JobWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

registerEnumType($Enums.JobStatus, { name: 'JobStatus' })
registerEnumType($Enums.JobType, { name: 'JobType' })

@InputType()
export class JobWhereInputStrict
  implements RestrictProperties<JobWhereInputStrict, Prisma.JobWhereInput>
{
  payPerHour: FloatFilter
  Attendance: AttendanceListRelationFilter
  shiftInformation: ShiftInformationRelationFilter
  Employment: EmploymentListRelationFilter
  Bookmark: BookmarkListRelationFilter
  Application: ApplicationListRelationFilter
  employerId: StringFilter
  Employer: EmployerRelationFilter
  contactInfo: StringFilter
  companyId: IntFilter
  Company: CompanyRelationFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  id: IntFilter
  title: StringFilter
  description: StringFilter
  addressId: IntFilter
  @Field(() => $Enums.JobStatus)
  status: $Enums.JobStatus
  @Field(() => $Enums.JobType)
  type: $Enums.JobType
  start: DateTimeFilter
  end: DateTimeFilter
  skills: SubCategoryListRelationFilter
  address: AddressRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: JobWhereInput[]
  OR: JobWhereInput[]
  NOT: JobWhereInput[]
}

@InputType()
export class JobWhereInput extends PartialType(JobWhereInputStrict) {}

@InputType()
export class JobListRelationFilter {
  every?: JobWhereInput
  some?: JobWhereInput
  none?: JobWhereInput
}

@InputType()
export class JobRelationFilter {
  is?: JobWhereInput
  isNot?: JobWhereInput
}
