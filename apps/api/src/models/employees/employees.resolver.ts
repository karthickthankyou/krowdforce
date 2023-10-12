import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { SubCategory } from '../sub-categories/entity/sub-category.entity'
import { User } from '../users/entity/user.entity'
import { CreateEmployeeInput } from './dtos/create-employee.input'
import {
  EmployeeFilter,
  FindManyEmployeeArgs,
  FindUniqueEmployeeArgs,
} from './dtos/find.args'
import { UpdateEmployeeInput } from './dtos/update-employee.input'
import { EmployeesService } from './employees.service'
import { Employee, EmployeeStats } from './entity/employee.entity'
import { Application } from '../applications/entity/application.entity'
import { Bookmark } from '../bookmarks/entity/bookmark.entity'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import {
  AggregateCountOutput,
  LocationFilterInput,
} from 'src/common/dtos/common.input'
import { Address } from '../addresses/entity/address.entity'

@Resolver(() => Employee)
export class EmployeesResolver {
  constructor(
    private readonly employeesService: EmployeesService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Employee)
  createEmployee(@Args('createEmployeeInput') args: CreateEmployeeInput) {
    return this.employeesService.create(args)
  }

  @Query(() => [Employee], { name: 'employees' })
  findAll(@Args() args: FindManyEmployeeArgs) {
    return this.employeesService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => EmployeeStats, { name: 'employeeStats' })
  async employeeStats(@GetUser() user: GetUserType): Promise<EmployeeStats> {
    const [followedBy, followers, applications, bookmarks] = await Promise.all([
      this.prisma.follow.count({
        where: { followerId: user.uid },
      }),
      this.prisma.follow.count({
        where: { followingId: user.uid },
      }),
      this.prisma.application.count({
        where: { employeeId: user.uid },
      }),
      this.prisma.bookmark.count({
        where: { employeeId: user.uid },
      }),
    ])

    return { followedBy, followers, applications, bookmarks }
  }

  @Query(() => [Employee], { name: 'searchEmployees' })
  async searchEmployees(
    @Args('locationFilter') locationFilter: LocationFilterInput,
    @Args('employeeFilter', { nullable: true }) args: EmployeeFilter,
  ) {
    try {
      const { ne_lat, ne_lng, sw_lat, sw_lng } = locationFilter
      console.log('locationFilter', locationFilter)
      const { where = {}, ...employeeFilter } = args || {}

      const employees = await this.prisma.employee.findMany({
        ...employeeFilter,
        where: {
          ...where,
          address: {
            lat: { lte: ne_lat, gte: sw_lat },
            lng: { lte: ne_lng, gte: sw_lng },
          },
        },
      })

      return employees
    } catch (error) {
      console.error('Error in searchEmployees:', error)
      throw new Error('Error in searchEmployees: ' + error.message)
    }
  }

  @Query(() => AggregateCountOutput, { name: 'employeeAggregate' })
  async employeeAggregate(
    @Args('employeeFilter', { nullable: true }) { where }: EmployeeFilter,
    @Args('locationFilter') locationFilter: LocationFilterInput,
  ) {
    const { ne_lat, ne_lng, sw_lat, sw_lng } = locationFilter

    const employeesCount = await this.prisma.employee.aggregate({
      _count: { _all: true },
      where: {
        ...where,
        address: {
          lat: { lte: ne_lat, gte: sw_lat },
          lng: { lte: ne_lng, gte: sw_lng },
        },
      },
    })

    return { count: employeesCount._count._all }
  }

  @Query(() => Employee, { name: 'employee' })
  findOne(@Args() args: FindUniqueEmployeeArgs) {
    return this.employeesService.findOne(args)
  }

  @AllowAuthenticated()
  @Query(() => Employee, { name: 'employeeMe', nullable: true })
  employeeMe(@GetUser() user: GetUserType) {
    return this.employeesService.findOne({
      where: { uid: user.uid },
    })
  }
  @Mutation(() => Employee)
  updateEmployee(@Args('updateEmployeeInput') args: UpdateEmployeeInput) {
    return this.employeesService.update(args)
  }

  @Mutation(() => Employee)
  removeEmployee(@Args() args: FindUniqueEmployeeArgs) {
    return this.employeesService.remove(args)
  }

  @ResolveField(() => User)
  user(@Parent() parent: Employee) {
    return this.prisma.user.findUnique({ where: { uid: parent.uid } })
  }

  @ResolveField(() => Address)
  address(@Parent() parent: Employee) {
    return this.prisma.address.findUnique({ where: { id: parent.addressId } })
  }

  @ResolveField(() => [SubCategory])
  skills(@Parent() parent: Employee) {
    return this.prisma.subCategory.findMany({
      where: { employees: { some: { uid: parent.uid } } },
    })
  }

  @ResolveField(() => [Application])
  applications(@Parent() parent: Employee) {
    return this.prisma.application.findMany({
      where: { employeeId: parent.uid },
    })
  }

  @ResolveField(() => [Bookmark])
  bookmarks(@Parent() parent: Employee) {
    return this.prisma.bookmark.findMany({
      where: { employeeId: parent.uid },
    })
  }
}
