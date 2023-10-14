import { Module } from '@nestjs/common'
import { AttendancesService } from './attendances.service'
import { AttendancesResolver } from './attendances.resolver'
import { JwtService } from '@nestjs/jwt'

@Module({
  providers: [AttendancesResolver, AttendancesService, JwtService],
  exports: [AttendancesService],
})
export class AttendancesModule {}
