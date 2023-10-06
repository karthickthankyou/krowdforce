import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { EmployerOrderByRelationAggregateInput } from 'src/models/employers/dtos/order-by.args';
import { JobOrderByRelationAggregateInput } from 'src/models/jobs/dtos/order-by.args';

@InputType()
export class CompanyOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      CompanyOrderByWithRelationInputStrict,
      Prisma.CompanyOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  name: Prisma.SortOrder;
  Employer: EmployerOrderByRelationAggregateInput;
  Job: JobOrderByRelationAggregateInput;
}

@InputType()
export class CompanyOrderByWithRelationInput extends PartialType(
  CompanyOrderByWithRelationInputStrict,
) {}

@InputType()
export class CompanyOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder;
}
