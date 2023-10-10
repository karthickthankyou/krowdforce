import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ApplicationOrderByWithRelationInput } from './order-by.args'
import {
  ApplicationWhereInput,
  ApplicationWhereUniqueInput,
} from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.ApplicationScalarFieldEnum, {
  name: 'ApplicationScalarFieldEnum',
})

@ArgsType()
class FindManyApplicationArgsStrict
  implements
    RestrictProperties<
      FindManyApplicationArgsStrict,
      Omit<Prisma.ApplicationFindManyArgs, 'include' | 'select'>
    >
{
  where: ApplicationWhereInput
  orderBy: ApplicationOrderByWithRelationInput[]
  cursor: ApplicationWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.ApplicationScalarFieldEnum])
  distinct: Prisma.ApplicationScalarFieldEnum[]
}

@ArgsType()
export class FindManyApplicationArgs extends PartialType(
  FindManyApplicationArgsStrict,
) {}

@ArgsType()
export class FindUniqueApplicationArgs {
  @Field({ nullable: true })
  where: ApplicationWhereUniqueInput
}
