import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsResolver } from './jobs.resolver';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [JobsResolver, JobsService, JwtService],
  exports: [JobsService],
})
export class JobsModule {}
