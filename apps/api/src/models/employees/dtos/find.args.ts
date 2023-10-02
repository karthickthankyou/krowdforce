import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { EmployeeOrderByWithRelationInput } from './order-by.args'
import { EmployeeWhereInput, EmployeeWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.EmployeeScalarFieldEnum, {
  name: 'EmployeeScalarFieldEnum',
})

@ArgsType()
class FindManyEmployeeArgsStrict
  implements RestrictProperties<FindManyEmployeeArgsStrict, Omit<Prisma.EmployeeFindManyArgs, 'include' | 'select'>>
{
  where: EmployeeWhereInput
  orderBy: EmployeeOrderByWithRelationInput[]
  cursor: EmployeeWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.EmployeeScalarFieldEnum])
  distinct: Prisma.EmployeeScalarFieldEnum[]
}

@ArgsType()
export class FindManyEmployeeArgs extends PartialType(
  FindManyEmployeeArgsStrict,
) {}

@ArgsType()
export class FindUniqueEmployeeArgs {
  @Field({ nullable: true })
  where: EmployeeWhereUniqueInput
}