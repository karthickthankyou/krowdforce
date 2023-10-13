import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ShiftInformationsService } from './shift-informations.service'
import { ShiftInformation } from './entity/shift-information.entity'
import {
  FindManyShiftInformationArgs,
  FindUniqueShiftInformationArgs,
} from './dtos/find.args'
import { CreateShiftInformationInput } from './dtos/create-shift-information.input'
import { UpdateShiftInformationInput } from './dtos/update-shift-information.input'

@Resolver(() => ShiftInformation)
export class ShiftInformationsResolver {
  constructor(
    private readonly shiftInformationsService: ShiftInformationsService,
  ) {}

  @Mutation(() => ShiftInformation)
  createShiftInformation(
    @Args('createShiftInformationInput') args: CreateShiftInformationInput,
  ) {
    return this.shiftInformationsService.create(args)
  }

  @Query(() => [ShiftInformation], { name: 'shiftInformations' })
  findAll(@Args() args: FindManyShiftInformationArgs) {
    return this.shiftInformationsService.findAll(args)
  }

  @Query(() => ShiftInformation, { name: 'shiftInformation' })
  findOne(@Args() args: FindUniqueShiftInformationArgs) {
    return this.shiftInformationsService.findOne(args)
  }

  @Mutation(() => ShiftInformation)
  updateShiftInformation(
    @Args('updateShiftInformationInput') args: UpdateShiftInformationInput,
  ) {
    return this.shiftInformationsService.update(args)
  }

  @Mutation(() => ShiftInformation)
  removeShiftInformation(@Args() args: FindUniqueShiftInformationArgs) {
    return this.shiftInformationsService.remove(args)
  }
}
