import { Module } from '@nestjs/common';
import { BlueController } from './blue.controller';
import { BlueService } from './blue.service';

@Module({
  controllers: [BlueController],
  providers: [BlueService]
})
export class BlueModule {}
