import { InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { CompanyRelationFilter } from 'src/models/companies/dtos/where.args'
import { JobListRelationFilter } from 'src/models/jobs/dtos/where.args'
import { UserRelationFilter } from 'src/models/users/dtos/where.args'

@InputType()
export class EmployerWhereUniqueInput {
  uid: string
}

@InputType()
export class EmployerWhereInputStrict
  implements
    RestrictProperties<EmployerWhereInputStrict, Prisma.EmployerWhereInput>
{
  Job: JobListRelationFilter
  companyId: IntFilter
  company: CompanyRelationFilter
  uid: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  user: UserRelationFilter

  AND: EmployerWhereInput[]
  OR: EmployerWhereInput[]
  NOT: EmployerWhereInput[]
}

@InputType()
export class EmployerWhereInput extends PartialType(EmployerWhereInputStrict) {}

@InputType()
export class EmployerListRelationFilter {
  every?: EmployerWhereInput
  some?: EmployerWhereInput
  none?: EmployerWhereInput
}

@InputType()
export class EmployerRelationFilter {
  is?: EmployerWhereInput
  isNot?: EmployerWhereInput
}
