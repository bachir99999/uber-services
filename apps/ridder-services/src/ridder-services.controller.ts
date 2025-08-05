import { Controller, Get } from '@nestjs/common';
import { RidderServicesService } from './ridder-services.service';

@Controller()
export class RidderServicesController {
  constructor(private readonly ridderServicesService: RidderServicesService) {}

  @Get()
  getHello(): string {
    return this.ridderServicesService.getHello();
  }
}
