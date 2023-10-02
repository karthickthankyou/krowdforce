import { Module } from '@nestjs/common'
import { EmployersService } from './employers.service'
import { EmployersResolver } from './employers.resolver'

@Module({
  providers: [EmployersResolver, EmployersService],
  exports: [EmployersService],
})
export class EmployersModule {}
