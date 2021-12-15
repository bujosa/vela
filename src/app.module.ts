import { Module } from '@nestjs/common';
import { BlueModule } from './blue/blue.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blue } from './blue/entity/blue.entity';

// I using typeOrm for management database
@Module({
  imports: [
    BlueModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: `${process.env.MONGO_URL}`,
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Blue],
    }),
  ],
})
export class AppModule {}
