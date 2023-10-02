import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';
import { EmployeeRelationFilter } from 'src/models/employees/dtos/where.args';
import { EmployerRelationFilter } from 'src/models/employers/dtos/where.args';

@InputType()
export class UserWhereUniqueInput {
  uid: string;
}

@InputType()
export class UserWhereInputStrict
  implements RestrictProperties<UserWhereInputStrict, Prisma.UserWhereInput>
{
  uid: StringFilter;
  createdAt: DateTimeFilter;
  updatedAt: DateTimeFilter;
  name: StringFilter;
  image: StringFilter;
  employee: EmployeeRelationFilter;
  employer: EmployerRelationFilter;
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: UserWhereInput[];
  OR: UserWhereInput[];
  NOT: UserWhereInput[];
}

@InputType()
export class UserWhereInput extends PartialType(UserWhereInputStrict) {}

@InputType()
export class UserListRelationFilter {
  every?: UserWhereInput;
  some?: UserWhereInput;
  none?: UserWhereInput;
}

@InputType()
export class UserRelationFilter {
  is?: UserWhereInput;
  isNot?: UserWhereInput;
}
