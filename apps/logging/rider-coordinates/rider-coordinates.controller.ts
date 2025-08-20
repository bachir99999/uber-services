import { Body, Controller, Get, Post } from '@nestjs/common';
import CreateRiderCoordinatesDto from './dto/create-rider-coordinates.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    @Get()
    getCoordinates() {
        return { message: 'Rider coordinates endpoint' };
    }


    @Post()
    createCoordinates(@Body() createRiderCoordinatesDto: CreateRiderCoordinatesDto) {
        
        return { success: true, data: createRiderCoordinatesDto };
    }

}
