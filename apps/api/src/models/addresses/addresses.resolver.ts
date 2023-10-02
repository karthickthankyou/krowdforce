import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { AddressesService } from './addresses.service'
import { Address } from './entity/address.entity'
import { FindManyAddressArgs, FindUniqueAddressArgs } from './dtos/find.args'
import { CreateAddressInput } from './dtos/create-address.input'
import { UpdateAddressInput } from './dtos/update-address.input'

@Resolver(() => Address)
export class AddressesResolver {
  constructor(private readonly addressesService: AddressesService) {}

  @Mutation(() => Address)
  createAddress(@Args('createAddressInput') args: CreateAddressInput) {
    return this.addressesService.create(args)
  }

  @Query(() => [Address], { name: 'addresses' })
  findAll(@Args() args: FindManyAddressArgs) {
    return this.addressesService.findAll(args)
  }

  @Query(() => Address, { name: 'address' })
  findOne(@Args() args: FindUniqueAddressArgs) {
    return this.addressesService.findOne(args)
  }

  @Mutation(() => Address)
  updateAddress(@Args('updateAddressInput') args: UpdateAddressInput) {
    return this.addressesService.update(args)
  }

  @Mutation(() => Address)
  removeAddress(@Args() args: FindUniqueAddressArgs) {
    return this.addressesService.remove(args)
  }
}
