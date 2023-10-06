import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { CompaniesService } from './companies.service'
import { Company } from './entity/company.entity'
import { FindManyCompanyArgs, FindUniqueCompanyArgs } from './dtos/find.args'
import { CreateCompanyInput } from './dtos/create-company.input'
import { UpdateCompanyInput } from './dtos/update-company.input'

@Resolver(() => Company)
export class CompaniesResolver {
  constructor(private readonly companiesService: CompaniesService) {}

  @Mutation(() => Company)
  createCompany(@Args('createCompanyInput') args: CreateCompanyInput) {
    return this.companiesService.create(args)
  }

  @Query(() => [Company], { name: 'companies' })
  findAll(@Args() args: FindManyCompanyArgs) {
    return this.companiesService.findAll(args)
  }

  @Query(() => Company, { name: 'company' })
  findOne(@Args() args: FindUniqueCompanyArgs) {
    return this.companiesService.findOne(args)
  }

  @Mutation(() => Company)
  updateCompany(@Args('updateCompanyInput') args: UpdateCompanyInput) {
    return this.companiesService.update(args)
  }

  @Mutation(() => Company)
  removeCompany(@Args() args: FindUniqueCompanyArgs) {
    return this.companiesService.remove(args)
  }
}
