import { Module } from '@nestjs/common'
import { EmploymentsService } from './employments.service'
import { EmploymentsResolver } from './employments.resolver'

@Module({
  providers: [EmploymentsResolver, EmploymentsService],
  exports: [EmploymentsService],
})
export class EmploymentsModule {}
