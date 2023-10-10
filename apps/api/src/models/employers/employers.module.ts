import { Module } from '@nestjs/common'
import { EmployersService } from './employers.service'
import { EmployersResolver } from './employers.resolver'
import { JwtService } from '@nestjs/jwt'

@Module({
  providers: [EmployersResolver, EmployersService, JwtService],
  exports: [EmployersService],
})
export class EmployersModule {}
