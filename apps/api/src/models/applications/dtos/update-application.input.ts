import { CreateApplicationInput } from './create-application.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { EmployeeIdJobIdCompoundUniqueInput } from './where.args'

@InputType()
export class UpdateApplicationInput extends PartialType(
  CreateApplicationInput,
) {
  employeeId_jobId: EmployeeIdJobIdCompoundUniqueInput
}
