import { InputType, PickType } from '@nestjs/graphql'
import { Attendance } from '../entity/attendance.entity'

@InputType()
export class CreateAttendanceInput extends PickType(
  Attendance,
  ['jobId', 'employeeId', 'clockIn'],
  InputType,
) {}
