import { Field, InputType, PickType } from '@nestjs/graphql'
import { CreateAddressInput } from 'src/models/addresses/dtos/create-address.input'
import { ConnectSubCategoryInput } from 'src/models/sub-categories/dtos/create-sub-category.input'
import { Job } from '../entity/job.entity'
import { CreateShiftInformationInputWithoutJobId } from 'src/models/shift-informations/dtos/create-shift-information.input'

@InputType()
export class CreateJobInput extends PickType(
  Job,
  [
    'description',
    'companyId',
    'end',
    'payPerHour',
    'start',
    'status',
    'title',
    'type',
    'employerId',
    'contactInfo',
  ],
  InputType,
) {
  skills: ConnectSubCategoryInput[]
  @Field({ nullable: true })
  address: CreateAddressInput
  @Field({ nullable: true })
  companyAddressId: number

  @Field({ nullable: true })
  shiftInformation: CreateShiftInformationInputWithoutJobId
}
