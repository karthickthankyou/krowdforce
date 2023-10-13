import { Field, InputType, PartialType } from '@nestjs/graphql'
import { $Enums, Prisma } from '@prisma/client'
import {
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { JobRelationFilter } from 'src/models/jobs/dtos/where.args'

@InputType()
export class ShiftInformationWhereUniqueInput {
  jobId: number
}

@InputType()
export class EnumWeekdayListFilter {
  @Field(() => [$Enums.Weekday])
  equals: $Enums.Weekday[]
  @Field(() => $Enums.Weekday)
  has: $Enums.Weekday
  @Field(() => [$Enums.Weekday])
  hasEvery?: $Enums.Weekday[]
  @Field(() => [$Enums.Weekday])
  hasSome?: $Enums.Weekday[]
  @Field(() => Boolean)
  isEmpty?: boolean
}

@InputType()
export class ShiftInformationWhereInputStrict
  implements
    RestrictProperties<
      ShiftInformationWhereInputStrict,
      Prisma.ShiftInformationWhereInput
    >
{
  days: EnumWeekdayListFilter
  jobId: IntFilter
  startTime: StringFilter
  endTime: StringFilter
  Job: JobRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: ShiftInformationWhereInput[]
  OR: ShiftInformationWhereInput[]
  NOT: ShiftInformationWhereInput[]
}

@InputType()
export class ShiftInformationWhereInput extends PartialType(
  ShiftInformationWhereInputStrict,
) {}

@InputType()
export class ShiftInformationListRelationFilter {
  every?: ShiftInformationWhereInput
  some?: ShiftInformationWhereInput
  none?: ShiftInformationWhereInput
}

@InputType()
export class ShiftInformationRelationFilter {
  is?: ShiftInformationWhereInput
  isNot?: ShiftInformationWhereInput
}
