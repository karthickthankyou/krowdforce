import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';
import { JobListRelationFilter } from 'src/models/jobs/dtos/where.args';
import { UserRelationFilter } from 'src/models/users/dtos/where.args';

@InputType()
export class EmployerWhereUniqueInput {
  uid: string;
}

@InputType()
export class EmployerWhereInputStrict
  implements
    RestrictProperties<EmployerWhereInputStrict, Prisma.EmployerWhereInput>
{
  uid: StringFilter;
  createdAt: DateTimeFilter;
  updatedAt: DateTimeFilter;
  user: UserRelationFilter;
  jobs: JobListRelationFilter;
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: EmployerWhereInput[];
  OR: EmployerWhereInput[];
  NOT: EmployerWhereInput[];
}

@InputType()
export class EmployerWhereInput extends PartialType(EmployerWhereInputStrict) {}

@InputType()
export class EmployerListRelationFilter {
  every?: EmployerWhereInput;
  some?: EmployerWhereInput;
  none?: EmployerWhereInput;
}

@InputType()
export class EmployerRelationFilter {
  is?: EmployerWhereInput;
  isNot?: EmployerWhereInput;
}
