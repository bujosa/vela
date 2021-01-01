import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlueController } from './blue.controller';
import { BlueService } from './blue.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/blue',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [],
    }),
  ],
  controllers: [BlueController],
  providers: [BlueService],
})
export class BlueModule {}
