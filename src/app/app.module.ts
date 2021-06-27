import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

//App module acts like the root of the application
//it will have all the logic of the application imported here

//Imports
import { StudentModule } from 'src/Controllers/student/student.module';
import { TeacherModule } from 'src/Controllers/teacher/teacher.module';
import { CarModule } from './../Controllers/cars/car.module';

const e = process.env;

@Module({
  //We import each individual module
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(e.MONGO_URL + e.DB_NAME),
    StudentModule,
    TeacherModule,
    CarModule,
  ],
})
export class AppModule {}
