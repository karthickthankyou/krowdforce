import { ObjectType } from '@nestjs/graphql';
import { Employer as EmployerType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class Employer implements RestrictProperties<Employer, EmployerType> {
  uid: string;
  createdAt: Date;
  updatedAt: Date;
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
