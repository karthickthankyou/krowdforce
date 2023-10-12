import { Module } from '@nestjs/common'
import { PostsService } from './posts.service'
import { PostsResolver } from './posts.resolver'
import { JwtService } from '@nestjs/jwt'

@Module({
  providers: [PostsResolver, PostsService, JwtService],
  exports: [PostsService],
})
export class PostsModule {}
