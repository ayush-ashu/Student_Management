import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { Teacher } from '../shared/teacher.model';
import { TeachersService } from '../services/teachers.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  private admin_user = ''

  teachers: Teacher[] = []

  constructor(private auth: AuthService, private route:Router, private dialog: MatDialog,
    private teacherServ: TeachersService) {
    this.auth.getAdminUserName()
    .subscribe(
      res => {
        console.log(res)
        this.admin_user = res.admin_user.toString()
      },
      err => this.route.navigate(['/'])
    );
   }

  ngOnInit() {

  }

  onAddTeacher() {
    let dialogRef = this.dialog.open(AddTeacherComponent, {
      height: '600px',
      width: '600px',
    })

    dialogRef.afterClosed().subscribe(result => {

      if(result === undefined) {
        console.log("You did not enter any details")
      } else {
        console.log(result)
      }

    })
  }

}
