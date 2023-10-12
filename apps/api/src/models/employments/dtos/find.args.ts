import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { EmploymentOrderByWithRelationInput } from './order-by.args'
import { EmploymentWhereInput, EmploymentWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.EmploymentScalarFieldEnum, {
  name: 'EmploymentScalarFieldEnum',
})

@ArgsType()
class FindManyEmploymentArgsStrict
  implements
    RestrictProperties<
      FindManyEmploymentArgsStrict,
      Omit<Prisma.EmploymentFindManyArgs, 'include' | 'select'>
    >
{
  where: EmploymentWhereInput
  orderBy: EmploymentOrderByWithRelationInput[]
  cursor: EmploymentWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.EmploymentScalarFieldEnum])
  distinct: Prisma.EmploymentScalarFieldEnum[]
}

@ArgsType()
export class FindManyEmploymentArgs extends PartialType(
  FindManyEmploymentArgsStrict,
) {}

@ArgsType()
export class FindUniqueEmploymentArgs {
  @Field({ nullable: true })
  where: EmploymentWhereUniqueInput
}
