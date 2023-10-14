import { CreateAttendanceInput } from './create-attendance.input'
import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Attendance } from '@prisma/client'

@InputType()
export class UpdateAttendanceInput extends PartialType(CreateAttendanceInput) {
  id: Attendance['id']
  @Field({ nullable: true })
  clockOut: Date
}
