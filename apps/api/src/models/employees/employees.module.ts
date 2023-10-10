import { Module } from '@nestjs/common'
import { EmployeesResolver } from './employees.resolver'
import { EmployeesService } from './employees.service'
import { JwtService } from '@nestjs/jwt'

@Module({
  providers: [EmployeesResolver, EmployeesService, JwtService],
  exports: [EmployeesService],
})
export class EmployeesModule {}
