import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { AddressRelationFilter } from 'src/models/addresses/dtos/where.args'
import { EmployerListRelationFilter } from 'src/models/employers/dtos/where.args'
import { JobListRelationFilter } from 'src/models/jobs/dtos/where.args'

@InputType()
export class CompanyWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class CompanyWhereInputStrict
  implements
    RestrictProperties<CompanyWhereInputStrict, Prisma.CompanyWhereInput>
{
  description: StringFilter
  addressId: IntFilter
  address: AddressRelationFilter
  id: IntFilter
  name: StringFilter
  Employer: EmployerListRelationFilter
  Job: JobListRelationFilter

  AND: CompanyWhereInput[]
  OR: CompanyWhereInput[]
  NOT: CompanyWhereInput[]
}

@InputType()
export class CompanyWhereInput extends PartialType(CompanyWhereInputStrict) {}

@InputType()
export class CompanyListRelationFilter {
  every?: CompanyWhereInput
  some?: CompanyWhereInput
  none?: CompanyWhereInput
}

@InputType()
export class CompanyRelationFilter {
  is?: CompanyWhereInput
  isNot?: CompanyWhereInput
}
