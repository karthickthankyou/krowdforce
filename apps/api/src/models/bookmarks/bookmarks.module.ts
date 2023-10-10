import { Module } from '@nestjs/common'
import { BookmarksService } from './bookmarks.service'
import { BookmarksResolver } from './bookmarks.resolver'
import { JwtService } from '@nestjs/jwt'

@Module({
  providers: [BookmarksResolver, BookmarksService, JwtService],
  exports: [BookmarksService],
})
export class BookmarksModule {}
