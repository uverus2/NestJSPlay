import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car, CarDocument } from './car.schema';

@Injectable()
export class CarsService {
  constructor(
    @InjectModel(Car.name) private readonly carModel: Model<CarDocument>,
  ) {}

  async findAll(): Promise<Car[]> {
    return this.carModel.find().exec();
  }

  async findByNumberPlate(plate: string): Promise<Car[]> {
    return new Promise((resolve, reject) => {
      this.carModel.find({ numberPlate: plate }, (err, data) => {
        if (data.length <= 0) {
          const error = {
            message: 'We do not have this number plate registered here',
            status: 404,
          };
          reject(error);
        }

        resolve(data);
      });
    });
  }
}
