import { CreateBookmarkInput } from './create-bookmark.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { EmployeeIdJobIdCompoundUniqueInput } from 'src/models/applications/dtos/where.args'

@InputType()
export class UpdateBookmarkInput extends PartialType(CreateBookmarkInput) {
  employeeId_jobId: EmployeeIdJobIdCompoundUniqueInput
}
