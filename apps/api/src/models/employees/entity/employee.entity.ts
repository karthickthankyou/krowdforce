import { ObjectType } from '@nestjs/graphql';
import { Employee as EmployeeType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class Employee implements RestrictProperties<Employee, EmployeeType> {
  uid: string;
  createdAt: Date;
  updatedAt: Date;
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
