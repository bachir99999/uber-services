import { IsNumber, IsNotEmpty } from 'class-validator';

class CreateRiderCoordinatesDto {
  @IsNumber()
  @IsNotEmpty()
  readonly latitude: number;

  @IsNumber()
  @IsNotEmpty()
  readonly longitude: number;

  @IsNotEmpty()
  readonly riderId: string;

  constructor(latitude: number, longitude: number, riderId: string) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.riderId = riderId;
  }
}
export default CreateRiderCoordinatesDto;