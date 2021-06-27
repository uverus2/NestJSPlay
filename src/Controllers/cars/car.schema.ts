import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Car {
  @Prop({ required: true, unique: true, trim: true })
  numberPlate: string;

  @Prop({ required: true, trim: true })
  brand: string;

  @Prop({ required: true, trim: true })
  model: string;

  @Prop({ required: true, trim: true })
  year: string;

  @Prop({ required: true, trim: true })
  gearBox: string;

  @Prop({ required: true, trim: true })
  fuelType: string;
}

export type CarDocument = Car & Document;


export const CarSchema = SchemaFactory.createForClass(Car);