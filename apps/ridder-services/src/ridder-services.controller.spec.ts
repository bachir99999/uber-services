import { Test, TestingModule } from '@nestjs/testing';
import { RidderServicesController } from './ridder-services.controller';
import { RidderServicesService } from './ridder-services.service';

describe('RidderServicesController', () => {
  let ridderServicesController: RidderServicesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RidderServicesController],
      providers: [RidderServicesService],
    }).compile();

    ridderServicesController = app.get<RidderServicesController>(RidderServicesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ridderServicesController.getHello()).toBe('Hello World!');
    });
  });
});
