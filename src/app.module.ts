import { Module } from '@nestjs/common';
import { BlueModule } from './blue/blue.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [BlueModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [],
  providers: [],
})
export class AppModule {}
