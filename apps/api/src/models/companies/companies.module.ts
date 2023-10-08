import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesResolver } from './companies.resolver';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [CompaniesResolver, CompaniesService, JwtService],
  exports: [CompaniesService],
})
export class CompaniesModule {}
