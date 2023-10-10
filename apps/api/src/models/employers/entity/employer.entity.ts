import { Field, ObjectType } from '@nestjs/graphql'
import { Employer as EmployerType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Employer implements RestrictProperties<Employer, EmployerType> {
  @Field()
  uid: string
  createdAt: Date
  updatedAt: Date

  @Field({ nullable: true })
  companyId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
