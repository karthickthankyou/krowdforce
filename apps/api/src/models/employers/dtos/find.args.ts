import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { EmployerOrderByWithRelationInput } from './order-by.args'
import { EmployerWhereInput, EmployerWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.EmployerScalarFieldEnum, {
  name: 'EmployerScalarFieldEnum',
})

@ArgsType()
class FindManyEmployerArgsStrict
  implements RestrictProperties<FindManyEmployerArgsStrict, Omit<Prisma.EmployerFindManyArgs, 'include' | 'select'>>
{
  where: EmployerWhereInput
  orderBy: EmployerOrderByWithRelationInput[]
  cursor: EmployerWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.EmployerScalarFieldEnum])
  distinct: Prisma.EmployerScalarFieldEnum[]
}

@ArgsType()
export class FindManyEmployerArgs extends PartialType(
  FindManyEmployerArgsStrict,
) {}

@ArgsType()
export class FindUniqueEmployerArgs {
  @Field({ nullable: true })
  where: EmployerWhereUniqueInput
}