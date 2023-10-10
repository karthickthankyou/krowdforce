import { Module } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { CompaniesResolver } from './companies.resolver'
import { CompaniesService } from './companies.service'

@Module({
  providers: [CompaniesResolver, CompaniesService, JwtService],
  exports: [CompaniesService],
})
export class CompaniesModule {}
