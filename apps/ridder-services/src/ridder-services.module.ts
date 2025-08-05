import { Module } from '@nestjs/common';
import { RidderServicesController } from './ridder-services.controller';
import { RidderServicesService } from './ridder-services.service';

@Module({
  imports: [],
  controllers: [RidderServicesController],
  providers: [RidderServicesService],
})
export class RidderServicesModule {}
