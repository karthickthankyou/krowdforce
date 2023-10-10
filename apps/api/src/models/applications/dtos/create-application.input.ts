import { InputType, PickType } from '@nestjs/graphql'
import { Application } from '../entity/application.entity'

@InputType()
export class CreateApplicationInput extends PickType(
  Application,
  ['employeeId', 'jobId'],
  InputType,
) {}
