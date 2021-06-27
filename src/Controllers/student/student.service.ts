import { students } from './../../db';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import {
  FindStudentResponseDto,
  StudentResponseDto,
  CreateStudentDto,
  UpdateStudentDto,
} from './dto/student.dto';

//This decorator marks the class as a provider. It gives necessary metadata

//The services are used to handle the retrieve and insert logic into a DB
@Injectable()
export class StudentService {
  private students = students;
  getStudents(): FindStudentResponseDto[] {
    return this.students;
  }

  getStudentById(studentId: string): FindStudentResponseDto {
    return this.students.find((i) => i.id === studentId);
  }

  getTeacherStudents(teacherId: string): FindStudentResponseDto[] {
    return this.students.filter((i) => i.teacher === teacherId);
  }

  createStudent(payload: CreateStudentDto): StudentResponseDto {
    const newStudent = {
      id: uuid(),
      ...payload,
    };

    this.students.push(newStudent);
    return newStudent;
  }

  updateStudentTeacher(
    teacherId: string,
    studentId: string,
  ): StudentResponseDto {
    let updatedStudent: StudentResponseDto;

    const updatedStudentList = this.students.map((i) => {
      if (i.id === studentId) {
        updatedStudent = {
          ...i,
          teacher: teacherId,
        };
        return updatedStudent;
      } else return i;
    });

    this.students = updatedStudentList;

    return updatedStudent;
  }

  updateStudent(studentId: string, payload: UpdateStudentDto) {
    let updatedStudent: StudentResponseDto;
    const updatedStudentList = this.students.map((i) => {
      if (i.id === studentId) {
        updatedStudent = {
          id: studentId,
          ...payload,
        };
        return updatedStudent;
      } else return i;
    });

    this.students = updatedStudentList;

    return updatedStudent;
  }
}
