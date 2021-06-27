import { validUserMiddleware } from './../../common/middlware/validStudent.middleware';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

//Controllers
import StudentController from './student.controller';

//Providers
import { StudentService } from './student.service';

//To add controllers and modules we define the keywords within the Module and pass an array of the values
@Module({
  controllers: [StudentController],
  providers: [StudentService],
  //Say which provider of this module is exportable
  exports: [StudentService],
})
export class StudentModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(validUserMiddleware).forRoutes({
      path: 'students/:studentId',
      method: RequestMethod.GET,
    });

    consumer.apply(validUserMiddleware).forRoutes({
      path: 'students/:studentId',
      method: RequestMethod.PUT,
    });
  }
}
