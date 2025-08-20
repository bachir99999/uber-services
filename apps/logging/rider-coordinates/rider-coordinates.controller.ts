import { Body, Controller, Get, Post } from '@nestjs/common';
import CreateRiderCoordinatesDto from './dto/create-rider-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    constructor(private readonly riderCoordinatesService: RiderCoordinatesService) {}
    @Get()
    getCoordinates() {
        return { message: 'Rider coordinates endpoint' };
    }


    @Post()
    async createCoordinates(@Body() createRiderCoordinatesDto: CreateRiderCoordinatesDto) {
        const riderCoordinates = this.riderCoordinatesService.saveCoordinates(createRiderCoordinatesDto);
        return { success: true, data:riderCoordinates};
    }

}
