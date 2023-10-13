import { Module } from '@nestjs/common'
import { EmploymentsService } from './employments.service'
import { EmploymentsResolver } from './employments.resolver'
import { JwtService } from '@nestjs/jwt'

@Module({
  providers: [EmploymentsResolver, EmploymentsService, JwtService],
  exports: [EmploymentsService],
})
export class EmploymentsModule {}
