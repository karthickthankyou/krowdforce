import { Module } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { EmployersResolver } from './employers.resolver'
import { EmployersService } from './employers.service'

@Module({
  providers: [EmployersResolver, EmployersService, JwtService],
  exports: [EmployersService],
})
export class EmployersModule {}
