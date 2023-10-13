import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import {
  $Enums,
  ShiftInformation as ShiftInformationType,
} from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType($Enums.Weekday, { name: 'Weekday' })

@ObjectType()
export class ShiftInformation
  implements RestrictProperties<ShiftInformation, ShiftInformationType>
{
  jobId: number
  startTime: string
  endTime: string
  @Field(() => [$Enums.Weekday], { nullable: true })
  days: $Enums.Weekday[]
}
