import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinates } from './schemas/rider-coordiantes.schema';
import { Model } from 'mongoose';
import CreateRiderCoordinatesDto from './dto/create-rider-coordinates.dto';

@Injectable()
export class RiderCoordinatesService {
    constructor(
        @InjectModel(RiderCoordinates.name)
        private readonly riderCoordinatesModel: Model<RiderCoordinates>
    ) {}

    async saveCoordinates(createRiderCoordinatesDto: CreateRiderCoordinatesDto) {
        const newCoordinates = new this.riderCoordinatesModel(createRiderCoordinatesDto);
        return newCoordinates.save();
    }
}
