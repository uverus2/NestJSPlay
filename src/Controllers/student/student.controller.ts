import { StudentService } from './student.service';
//We create controllers via decorators. They specify what we are trying to create.
//Most are found in the Common module in the library
import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';

import {
  CreateStudentDto,
  UpdateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
} from './dto/student.dto';

//We define the controller by calling the decorator as a method above it.
//If we pass a string in the method it will mean every route will start with "/student" keyword
@Controller('students')
class StudentController {
  //To specify the type of HTTP request we use decorators from Nest again.

  //To use services you need to add them to a constructor and import them into the APP module
  //You have to add the type of the service to know it is meant to use the appropriate service
  constructor(private readonly StudentService: StudentService) {}

  @Get()
  //This is how we use DTO to define the response type. We add the [] at the end to show it will return an array
  getStudents(): FindStudentResponseDto[] {
    return this.StudentService.getStudents();
  }

  //You can use - @Param() params: { studentId: string } to define an object with Params
  @Get('/:studentId')
  getStudentById(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
    //If we do not pass an array it means we are returning 1 students aka a single object
  ): FindStudentResponseDto {
    return this.StudentService.getStudentById(studentId);
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
    return this.StudentService.createStudent(body);
  }

  @Put('/:studentId')
  updateStudent(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return this.StudentService.updateStudent(studentId, body);
  }
}

export default StudentController;
