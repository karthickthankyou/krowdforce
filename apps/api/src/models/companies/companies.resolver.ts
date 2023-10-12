import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { GetUserType } from 'src/common/types'
import { Address } from '../addresses/entity/address.entity'
import { AddEmployerInput } from '../employers/dtos/create-employer.input'
import { Employer, EmployerStats } from '../employers/entity/employer.entity'
import { Job } from '../jobs/entity/job.entity'
import { CompaniesService } from './companies.service'
import { CreateCompanyInput } from './dtos/create-company.input'
import { FindManyCompanyArgs, FindUniqueCompanyArgs } from './dtos/find.args'
import { UpdateCompanyInput } from './dtos/update-company.input'
import { Company } from './entity/company.entity'
import { BadRequestException } from '@nestjs/common'

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

  @AllowAuthenticated()
  @Mutation(() => Company)
  async addEmployer(
    @Args('addEmployerInput') { uid }: AddEmployerInput,
    @GetUser() user: GetUserType,
  ) {
    const employer = await this.prisma.employer.findUnique({
      where: { uid: user.uid },
    })
    const existingEmployer = await this.prisma.employer.findUnique({
      where: { uid },
    })

    if (existingEmployer.companyId) {
      throw new BadRequestException('User is already employer.')
    }

    return this.prisma.employer.update({
      data: {
        companyId: employer.companyId,
      },
      where: { uid },
    })
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

  @ResolveField(() => [Job])
  jobs(@Parent() parent: Company) {
    return this.prisma.job.findMany({ where: { companyId: parent.id } })
  }

  @ResolveField(() => [Employer])
  employers(@Parent() parent: Company) {
    return this.prisma.employer.findMany({ where: { companyId: parent.id } })
  }
}
