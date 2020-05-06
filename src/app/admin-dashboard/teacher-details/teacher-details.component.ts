import { Component, OnInit } from '@angular/core';
import { TeachersService } from 'src/app/services/teachers.service';
import { Teacher } from 'src/app/shared/teacher.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {

   teachers: Teacher[];
  constructor(private teacherServ: TeachersService, private auth: AuthService) {
   }

  ngOnInit() {
    this.auth.getTeacherRecords().subscribe(
      res => this.teachers = res.message,
      err => console.log(err)
    );

    //  this.teacherServ.teacherChanged.subscribe(
    //    (teachers: Teacher[]) => {
    //      this.teachers = teachers;
    //    })

    this.auth.subject.subscribe(
      res => this.teachers = res,
      err => console.log(err)
    )
  }

}
