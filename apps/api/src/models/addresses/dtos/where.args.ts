import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  FloatFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { CompanyListRelationFilter } from 'src/models/companies/dtos/where.args'
import { EmployeeListRelationFilter } from 'src/models/employees/dtos/where.args'
import { JobListRelationFilter } from 'src/models/jobs/dtos/where.args'

@InputType()
export class AddressWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class AddressWhereInputStrict
  implements
    RestrictProperties<AddressWhereInputStrict, Prisma.AddressWhereInput>
{
  Employee: EmployeeListRelationFilter
  Company: CompanyListRelationFilter
  id: IntFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  address: StringFilter
  lat: FloatFilter
  lng: FloatFilter
  job: JobListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: AddressWhereInput[]
  OR: AddressWhereInput[]
  NOT: AddressWhereInput[]
}

@InputType()
export class AddressWhereInput extends PartialType(AddressWhereInputStrict) {}

@InputType()
export class AddressListRelationFilter {
  every?: AddressWhereInput
  some?: AddressWhereInput
  none?: AddressWhereInput
}

@InputType()
export class AddressRelationFilter {
  is?: AddressWhereInput
  isNot?: AddressWhereInput
}
