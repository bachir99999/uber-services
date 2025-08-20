
import { HydratedDocument } from "mongoose";


export type RiderCoordinatesDocument = HydratedDocument<RiderCoordinates>;

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class RiderCoordinates {
    @Prop({ required: true })
    riderId: string;

    @Prop({ required: true })
    latitude: number;

    @Prop({ required: true })
    longitude: number;

    @Prop({ default: Date.now })
    timestamp: Date;
}

export const RiderCoordinatesFactory = SchemaFactory.createForClass(RiderCoordinates);