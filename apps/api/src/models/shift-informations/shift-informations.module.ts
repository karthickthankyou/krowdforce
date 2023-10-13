import { Module } from '@nestjs/common'
import { ShiftInformationsService } from './shift-informations.service'
import { ShiftInformationsResolver } from './shift-informations.resolver'

@Module({
  providers: [ShiftInformationsResolver, ShiftInformationsService],
  exports: [ShiftInformationsService],
})
export class ShiftInformationsModule {}
