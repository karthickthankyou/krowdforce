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
import { Company } from '../companies/entity/company.entity'
import { User } from '../users/entity/user.entity'
import { CreateEmployerInput } from './dtos/create-employer.input'
import { FindManyEmployerArgs, FindUniqueEmployerArgs } from './dtos/find.args'
import { UpdateEmployerInput } from './dtos/update-employer.input'
import { EmployersService } from './employers.service'
import { Employer } from './entity/employer.entity'

@Resolver(() => Employer)
export class EmployersResolver {
  constructor(
    private readonly employersService: EmployersService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Employer)
  createEmployer(@Args('createEmployerInput') args: CreateEmployerInput) {
    return this.employersService.create(args)
  }

  @Query(() => [Employer], { name: 'employers' })
  findAll(@Args() args: FindManyEmployerArgs) {
    return this.employersService.findAll(args)
  }

  @Query(() => Employer, { name: 'employer' })
  findOne(@Args() args: FindUniqueEmployerArgs) {
    return this.employersService.findOne(args)
  }

  @AllowAuthenticated()
  @Query(() => Employer, { name: 'employerMe' })
  employerMe(@GetUser() user: GetUserType) {
    return this.employersService.findOne({
      where: { uid: user.uid },
    })
  }

  @Mutation(() => Employer)
  updateEmployer(@Args('updateEmployerInput') args: UpdateEmployerInput) {
    return this.employersService.update(args)
  }

  @Mutation(() => Employer)
  removeEmployer(@Args() args: FindUniqueEmployerArgs) {
    return this.employersService.remove(args)
  }

  @ResolveField(() => User)
  user(@Parent() parent: User) {
    return this.prisma.user.findUnique({ where: { uid: parent.uid } })
  }

  @ResolveField(() => Company)
  company(@Parent() parent: Employer) {
    return this.prisma.company.findUnique({ where: { id: parent.companyId } })
  }
}
