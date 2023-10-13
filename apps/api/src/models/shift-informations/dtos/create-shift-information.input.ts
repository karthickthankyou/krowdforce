import { InputType, OmitType, PickType } from '@nestjs/graphql'
import { ShiftInformation } from '../entity/shift-information.entity'

@InputType()
export class CreateShiftInformationInput extends PickType(
  ShiftInformation,
  ['days', 'jobId', 'endTime', 'startTime'],
  InputType,
) {}
@InputType()
export class CreateShiftInformationInputWithoutJobId extends OmitType(
  CreateShiftInformationInput,
  ['jobId'],
  InputType,
) {}
