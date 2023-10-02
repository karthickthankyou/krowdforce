import { Module } from '@nestjs/common'
import { JobsService } from './jobs.service'
import { JobsResolver } from './jobs.resolver'

@Module({
  providers: [JobsResolver, JobsService],
  exports: [JobsService],
})
export class JobsModule {}
