import { Module } from '@nestjs/common'
import { FollowsService } from './follows.service'
import { FollowsResolver } from './follows.resolver'
import { JwtService } from '@nestjs/jwt'

@Module({
  providers: [FollowsResolver, FollowsService, JwtService],
  exports: [FollowsService],
})
export class FollowsModule {}
