import { CarsService } from './cars.service';
import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { Car } from './car.schema';

@Controller('cars')
export class CarsController {
  constructor(private readonly CarsService: CarsService) {}

  @Get()
  async findAll(): Promise<Car[]> {
    return this.CarsService.findAll();
  }

  @Get('/:plate')
  async findByNumberPlate(@Param('plate') plate: string): Promise<Car[]> {
    try {
      return await this.CarsService.findByNumberPlate(plate);
    } catch (e) {
      console.log(e);
      if (e?.message && e?.status) {
        throw new HttpException(e.message, e.status);
      }

      throw new HttpException(e, 500);
    }
  }
}
