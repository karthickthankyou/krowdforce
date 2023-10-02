import {
  Field,
  InputType,
  PartialType,
  registerEnumType,
} from '@nestjs/graphql';
import { $Enums, Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';
import { AddressRelationFilter } from 'src/models/addresses/dtos/where.args';
import { EmployerRelationFilter } from 'src/models/employers/dtos/where.args';
import { SubCategoryListRelationFilter } from 'src/models/sub-categories/dtos/where.args';

@InputType()
export class JobWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}

registerEnumType($Enums.JobStatus, { name: 'JobStatus' });
registerEnumType($Enums.JobType, { name: 'JobType' });

@InputType()
export class JobWhereInputStrict
  implements RestrictProperties<JobWhereInputStrict, Prisma.JobWhereInput>
{
  createdAt: DateTimeFilter;
  updatedAt: DateTimeFilter;
  id: IntFilter;
  title: StringFilter;
  description: StringFilter;
  employerId: StringFilter;
  addressId: IntFilter;
  @Field(() => $Enums.JobStatus)
  status: $Enums.JobStatus;
  @Field(() => $Enums.JobType)
  type: $Enums.JobType;
  start: DateTimeFilter;
  end: DateTimeFilter;
  salary: IntFilter;
  employer: EmployerRelationFilter;
  skills: SubCategoryListRelationFilter;
  address: AddressRelationFilter;
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: JobWhereInput[];
  OR: JobWhereInput[];
  NOT: JobWhereInput[];
}

@InputType()
export class JobWhereInput extends PartialType(JobWhereInputStrict) {}

@InputType()
export class JobListRelationFilter {
  every?: JobWhereInput;
  some?: JobWhereInput;
  none?: JobWhereInput;
}

@InputType()
export class JobRelationFilter {
  is?: JobWhereInput;
  isNot?: JobWhereInput;
}
