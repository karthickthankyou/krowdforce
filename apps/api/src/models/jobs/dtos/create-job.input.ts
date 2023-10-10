import { Field, InputType, PickType } from '@nestjs/graphql'
import { CreateAddressInput } from 'src/models/addresses/dtos/create-address.input'
import { ConnectSubCategoryInput } from 'src/models/sub-categories/dtos/create-sub-category.input'
import { Job } from '../entity/job.entity'

@InputType()
export class CreateJobInput extends PickType(
  Job,
  [
    'description',
    'companyId',
    'end',
    'salary',
    'start',
    'status',
    'title',
    'type',
  ],
  InputType,
) {
  skills: ConnectSubCategoryInput[]
  @Field({ nullable: true })
  address: CreateAddressInput
  @Field({ nullable: true })
  companyAddressId: number
}
