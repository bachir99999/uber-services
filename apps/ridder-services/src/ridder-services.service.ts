import { Injectable } from '@nestjs/common';

@Injectable()
export class RidderServicesService {
  getHello(): string {
    return 'Hello World!';
  }
}
