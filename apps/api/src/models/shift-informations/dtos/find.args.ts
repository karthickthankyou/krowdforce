import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ShiftInformationOrderByWithRelationInput } from './order-by.args'
import {
  ShiftInformationWhereInput,
  ShiftInformationWhereUniqueInput,
} from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.ShiftInformationScalarFieldEnum, {
  name: 'ShiftInformationScalarFieldEnum',
})

@ArgsType()
class FindManyShiftInformationArgsStrict
  implements
    RestrictProperties<
      FindManyShiftInformationArgsStrict,
      Omit<Prisma.ShiftInformationFindManyArgs, 'include' | 'select'>
    >
{
  where: ShiftInformationWhereInput
  orderBy: ShiftInformationOrderByWithRelationInput[]
  cursor: ShiftInformationWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.ShiftInformationScalarFieldEnum])
  distinct: Prisma.ShiftInformationScalarFieldEnum[]
}

@ArgsType()
export class FindManyShiftInformationArgs extends PartialType(
  FindManyShiftInformationArgsStrict,
) {}

@ArgsType()
export class FindUniqueShiftInformationArgs {
  @Field({ nullable: true })
  where: ShiftInformationWhereUniqueInput
}
