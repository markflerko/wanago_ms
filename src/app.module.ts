import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
