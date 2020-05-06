import { Injectable, EventEmitter } from '@angular/core';
import { Teacher } from '../shared/teacher.model';
import { AuthService } from './auth.service';


@Injectable()
export class TeachersService {
teacherChanged = new EventEmitter<Teacher[]>();
private teachers: Teacher[] = [];

  constructor(private auth: AuthService) {
 
  }

  getTeachers() {
    return this.teachers.slice();
  }

  addTeachers(teacher: Teacher) {
    this.auth.addTeacher(teacher)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    );
    this.teachers.push(teacher);
    // this.teacherChanged.emit(this.teachers.slice());
  }
}

