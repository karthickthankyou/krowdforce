import { CreateApplicationInput } from './create-application.input'
import { Field, InputType, PartialType } from '@nestjs/graphql'
import { EmployeeIdJobIdCompoundUniqueInput } from './where.args'
import { $Enums } from '@prisma/client'

@InputType()
export class UpdateApplicationInput extends PartialType(
  CreateApplicationInput,
) {
  employeeId_jobId: EmployeeIdJobIdCompoundUniqueInput
  @Field(() => $Enums.ApplicationStatus)
  status: $Enums.ApplicationStatus
}
