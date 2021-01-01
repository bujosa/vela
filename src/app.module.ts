import { Module } from '@nestjs/common';
import { BlueModule } from './blue/blue.module';

@Module({
  imports: [BlueModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
