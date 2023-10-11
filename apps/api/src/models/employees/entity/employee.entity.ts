import { Field, ObjectType } from '@nestjs/graphql'
import { Employee as EmployeeType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Employee implements RestrictProperties<Employee, EmployeeType> {
  @Field({ nullable: true })
  contactInfo: string
  addressId: number
  uid: string
  createdAt: Date
  updatedAt: Date
  about: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
