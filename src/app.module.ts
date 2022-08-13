import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
import Subscriber from './subscribers/subscriber.entity';
import { SubscribersModule } from './subscribers/subscribers.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Subscriber]),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SubscribersModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
