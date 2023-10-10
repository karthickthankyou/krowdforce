import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import { $Enums, Application as ApplicationType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType($Enums.ApplicationStatus, { name: 'ApplicationStatus' })

@ObjectType()
export class Application
  implements RestrictProperties<Application, ApplicationType>
{
  createdAt: Date
  updatedAt: Date
  employeeId: string
  jobId: number
  @Field(() => $Enums.ApplicationStatus)
  status: $Enums.ApplicationStatus
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
