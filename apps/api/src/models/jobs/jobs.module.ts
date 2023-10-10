import { Module } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { JobsResolver } from './jobs.resolver'
import { JobsService } from './jobs.service'

@Module({
  providers: [JobsResolver, JobsService, JwtService],
  exports: [JobsService],
})
export class JobsModule {}
