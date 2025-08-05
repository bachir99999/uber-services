import { NestFactory } from '@nestjs/core';
import { RidderServicesModule } from './ridder-services.module';

async function bootstrap() {
  const app = await NestFactory.create(RidderServicesModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
