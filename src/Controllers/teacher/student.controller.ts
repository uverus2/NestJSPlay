import { StudentService } from './../student/student.service';
import { Controller, Get, Put, Param, ParseUUIDPipe } from '@nestjs/common';

import {
  FindStudentResponseDto,
  StudentResponseDto,
} from '../student/dto/student.dto';

@Controller('teachers/:teacherId/students')
class StudentTeacherController {
  constructor(private readonly StudentService: StudentService) {}

  @Get()
  getTeacherStudents(
    @Param('teacherId') teacherId: string,
  ): FindStudentResponseDto[] {
    return this.StudentService.getTeacherStudents(teacherId);
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
  ): StudentResponseDto {
    return this.StudentService.updateStudentTeacher(teacherId, studentId);
  }
}

export default StudentTeacherController;
