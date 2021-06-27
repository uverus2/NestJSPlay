import { StudentModule } from 'src/Controllers/student/student.module';
import { Module } from '@nestjs/common';
import { modules } from './controllerImports';
import { TeacherService } from './teacher.service';

//To add controllers and modules we define the keywords within the Module and pass an array of the values
@Module({
  //Inport the Student module which will contain the needed provider
  imports: [StudentModule],
  controllers: [...modules],
  providers: [TeacherService],
})

export class TeacherModule {}
