import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { AttendancesService } from './attendances.service'
import { Attendance } from './entity/attendance.entity'
import {
  FindManyAttendanceArgs,
  FindUniqueAttendanceArgs,
} from './dtos/find.args'
import { CreateAttendanceInput } from './dtos/create-attendance.input'
import { UpdateAttendanceInput } from './dtos/update-attendance.input'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { PrismaService } from 'src/common/prisma/prisma.service'
import {
  All,
  BadRequestException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common'
import { format } from 'date-fns'
import { Weekday } from '@prisma/client'
import { checkRowLevelPermission } from 'src/common/guards'
import { Job } from '../jobs/entity/job.entity'
import { Employee } from '../employees/entity/employee.entity'

@Resolver(() => Attendance)
export class AttendancesResolver {
  constructor(
    private readonly attendancesService: AttendancesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Attendance)
  async createAttendance(
    @Args('createAttendanceInput') { employeeId, jobId }: CreateAttendanceInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, employeeId)

    // Valid job
    const job = await this.prisma.job.findUnique({
      where: { id: jobId },
      include: { shiftInformation: true },
    })
    if (!job) {
      throw new NotFoundException('Job does not exist.')
    }

    //   Valid employee
    const employement = await this.prisma.employment.findFirst({
      where: {
        jobId,
        employeeId,
      },
    })

    if (!employement) {
      throw new ForbiddenException('Employment does not exist.')
    }

    const today: Weekday = format(new Date(), 'eeee').toUpperCase() as Weekday
    if (!job.shiftInformation?.days.includes(today)) {
      throw new ForbiddenException('Job is not active today.')
    }

    return this.attendancesService.create({
      employeeId,
      jobId,
      clockIn: new Date(),
    })
  }

  @AllowAuthenticated()
  @Query(() => [Attendance], { name: 'attendances' })
  findAll(@Args() args: FindManyAttendanceArgs, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, args.where.employeeId.equals)
    return this.prisma.attendance.findMany(args)
  }

  @AllowAuthenticated()
  @Query(() => [Attendance], { name: 'myAttendancesClockOuts' })
  myAttendancesClockOuts(@GetUser() user: GetUserType) {
    return this.prisma.attendance.findMany({
      where: {
        AND: [
          { employeeId: user.uid },
          { clockOut: null },
          { clockIn: { lt: new Date() } },
        ],
      },
    })
  }

  @AllowAuthenticated()
  @Query(() => [Attendance], { name: 'myEarnings' })
  myEarnings(@GetUser() user: GetUserType) {
    return this.prisma.attendance.findMany({
      where: {
        AND: [
          { employeeId: user.uid },
          { clockOut: { lt: new Date() } },
          { clockIn: { lt: new Date() } },
        ],
      },
    })
  }

  @AllowAuthenticated()
  @Query(() => [Attendance], { name: 'companyPayments' })
  async companyPayments(
    @Args() args: FindManyAttendanceArgs,
    @GetUser() user: GetUserType,
  ) {
    const employer = await this.prisma.employer.findUnique({
      where: { uid: user.uid },
    })
    return this.prisma.attendance.findMany({
      ...args,
      where: {
        ...args.where,
        job: {
          companyId: employer.companyId,
        },
      },
    })
  }

  @Query(() => Attendance, { name: 'attendance' })
  findOne(@Args() args: FindUniqueAttendanceArgs) {
    return this.attendancesService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Attendance)
  async payAttendance(
    @Args('attendanceId') attendanceId: number,
    @GetUser() user: GetUserType,
  ) {
    const attendance = await this.prisma.attendance.findUnique({
      where: { id: attendanceId },
      include: {
        job: { include: { Company: { include: { Employer: true } } } },
      },
    })
    console.log('attendance, attendanceId', attendance, attendanceId)
    if (attendance.paid) {
      throw new BadRequestException('Attendance is already paid')
    }

    const employers = attendance.job.Company.Employer

    if (!employers.map((emp) => emp.uid).includes(user.uid)) {
      throw new ForbiddenException(
        'No. You dont have rights to do this action.',
      )
    }

    return await this.prisma.attendance.update({
      data: { paid: true },
      where: { id: attendanceId },
    })
  }

  @AllowAuthenticated('admin')
  @Mutation(() => Attendance)
  async updateAttendance(
    @Args('updateAttendanceInput') args: UpdateAttendanceInput,
    @GetUser() user: GetUserType,
  ) {
    const attendance = await this.prisma.attendance.findUnique({
      where: { id: args.id },
    })
    checkRowLevelPermission(user, attendance.employeeId)
    return this.attendancesService.update(args)
  }

  @Mutation(() => Attendance)
  removeAttendance(@Args() args: FindUniqueAttendanceArgs) {
    return this.attendancesService.remove(args)
  }

  @ResolveField(() => Job)
  job(@Parent() parent: Attendance) {
    return this.prisma.job.findUnique({
      where: { id: parent.jobId },
    })
  }

  @ResolveField(() => Employee)
  employee(@Parent() parent: Attendance) {
    return this.prisma.employee.findUnique({
      where: { uid: parent.employeeId },
    })
  }
}
