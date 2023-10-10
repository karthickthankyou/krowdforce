import { Module } from '@nestjs/common'

import { JwtService } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { AuthGuard } from '../guards/auth.guard'

@Module({
  imports: [PassportModule],
  providers: [AuthGuard, JwtService],
})
export class AuthModule {}
