import { CreateShiftInformationInput } from './create-shift-information.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { ShiftInformation } from '@prisma/client'

@InputType()
export class UpdateShiftInformationInput extends PartialType(
  CreateShiftInformationInput,
) {
  jobId: ShiftInformation['jobId']
}
