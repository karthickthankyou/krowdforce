import { Module } from '@nestjs/common';

import { PassportModule } from '@nestjs/passport';
import { AuthGuard } from '../guards/auth.guard';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [PassportModule],
  providers: [AuthGuard, JwtService],
})
export class AuthModule {}
