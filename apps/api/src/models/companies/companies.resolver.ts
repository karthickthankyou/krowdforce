import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { CompaniesService } from './companies.service'
import { Company } from './entity/company.entity'
import { FindManyCompanyArgs, FindUniqueCompanyArgs } from './dtos/find.args'
import { CreateCompanyInput } from './dtos/create-company.input'
import { UpdateCompanyInput } from './dtos/update-company.input'
import { Address } from '../addresses/entity/address.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from 'src/common/types'

@Resolver(() => Company)
export class CompaniesResolver {
  constructor(
    private readonly companiesService: CompaniesService,
    private readonly prisma: PrismaService,
  ) {}

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

  @AllowAuthenticated()
  @Query(() => Company, { name: 'employerCompany' })
  async employerCompany(@GetUser() user: GetUserType) {
    const employer = await this.prisma.employer.findUnique({
      where: { uid: user.uid },
      include: { company: true },
    })
    return employer.company
  }

  @Mutation(() => Company)
  updateCompany(@Args('updateCompanyInput') args: UpdateCompanyInput) {
    return this.companiesService.update(args)
  }

  @Mutation(() => Company)
  removeCompany(@Args() args: FindUniqueCompanyArgs) {
    return this.companiesService.remove(args)
  }

  @ResolveField(() => Address)
  address(@Parent() parent: Company) {
    return this.prisma.address.findUnique({ where: { id: parent.addressId } })
  }
}
