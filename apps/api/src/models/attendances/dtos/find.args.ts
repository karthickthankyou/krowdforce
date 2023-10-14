import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { AttendanceOrderByWithRelationInput } from './order-by.args'
import { AttendanceWhereInput, AttendanceWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.AttendanceScalarFieldEnum, {
  name: 'AttendanceScalarFieldEnum',
})

@ArgsType()
class FindManyAttendanceArgsStrict
  implements
    RestrictProperties<
      FindManyAttendanceArgsStrict,
      Omit<Prisma.AttendanceFindManyArgs, 'include' | 'select'>
    >
{
  where: AttendanceWhereInput
  orderBy: AttendanceOrderByWithRelationInput[]
  cursor: AttendanceWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.AttendanceScalarFieldEnum])
  distinct: Prisma.AttendanceScalarFieldEnum[]
}

@ArgsType()
export class FindManyAttendanceArgs extends PartialType(
  FindManyAttendanceArgsStrict,
) {}

@ArgsType()
export class FindUniqueAttendanceArgs {
  @Field({ nullable: true })
  where: AttendanceWhereUniqueInput
}
