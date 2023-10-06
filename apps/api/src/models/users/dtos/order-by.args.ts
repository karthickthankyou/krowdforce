import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { AdminOrderByWithRelationInput } from 'src/models/admins/dtos/order-by.args';
import { EmployeeOrderByWithRelationInput } from 'src/models/employees/dtos/order-by.args';
import { EmployerOrderByWithRelationInput } from 'src/models/employers/dtos/order-by.args';

@InputType()
export class UserOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      UserOrderByWithRelationInputStrict,
      Prisma.UserOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  uid: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  name: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  image: Prisma.SortOrder;
  employee: EmployeeOrderByWithRelationInput;
  employer: EmployerOrderByWithRelationInput;
  Admin: AdminOrderByWithRelationInput;
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class UserOrderByWithRelationInput extends PartialType(
  UserOrderByWithRelationInputStrict,
) {}

@InputType()
export class UserOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder;
}
