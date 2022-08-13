import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['verbose', 'log', 'error'],
  });
  const configService = app.get(ConfigService);

  const PORT = configService.get('PORT') || 3002;

  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      port: PORT,
    },
  });

  app.startAllMicroservices(() => {
    Logger.log(`Server is running on PORT: ${PORT}`);
  });
}
bootstrap();
