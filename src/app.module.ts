import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlueModule } from './blue/blue.module';

@Module({
  imports: [BlueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
