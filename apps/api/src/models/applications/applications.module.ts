import { Module } from '@nestjs/common'
import { ApplicationsService } from './applications.service'
import { ApplicationsResolver } from './applications.resolver'
import { JwtService } from '@nestjs/jwt'

@Module({
  providers: [ApplicationsResolver, ApplicationsService, JwtService],
  exports: [ApplicationsService],
})
export class ApplicationsModule {}
