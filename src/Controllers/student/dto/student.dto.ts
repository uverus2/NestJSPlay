//Defines a type/structure of our request body
export class CreateStudentDto {
  name: string;
  teacher: string;
}

export class UpdateStudentDto {
  name: string;
  teacher: string;
}

//You can also define DTOs for the response we are sending to the Client

export class FindStudentResponseDto {
  id: string;
  name: string;
  teacher: string;
}

export class StudentResponseDto {
    id: string;
    name: string;
    teacher: string;
}
