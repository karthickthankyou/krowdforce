import { Field, Float, ObjectType } from '@nestjs/graphql'
import { Address as AddressType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Address implements RestrictProperties<Address, AddressType> {
  id: number
  createdAt: Date
  updatedAt: Date
  address: string
  @Field(() => Float)
  lat: number
  @Field(() => Float)
  lng: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
