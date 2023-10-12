import { InputType, PickType } from '@nestjs/graphql'
import { Employment } from '../entity/employment.entity'

@InputType()
export class CreateEmploymentInput extends PickType(
  Employment,
  ['jobId', 'employeeId', 'startDate'],
  InputType,
) {
  jobId: number
}
