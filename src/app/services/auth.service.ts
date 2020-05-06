import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Teacher } from '../shared/teacher.model';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {

  // private adminValidateUrl = "http://localhost:3000/getData";
  private adminValidateUrl = "http://localhost:3000/api/verifyAdmin"
  private verifyAdminToken = "http://localhost:3000/api/getAdminUserName"
  private addTeacherUrl = "http://localhost:3000/api/addTeacher"
  private getTeacherRecordsUrl = "http://localhost:3000/api/getTeacherRecords"

   subject = new Subject<Teacher[]>();
   teachers: Teacher[] = []
  constructor(private http: HttpClient) { }

  adminValidation(adminData: any) {
    console.log(adminData)
    return this.http.post<any>(this.adminValidateUrl, adminData)
  }

  getAdminUserName() {
    return this.http.get<any>(this.verifyAdminToken, {
      observe: "body",
      params: new HttpParams().append('token', localStorage.getItem('token'))
    })
  }

  addTeacher(teacherRecord: any) {

    console.log("Inside addTEacher servvice")
    console.log(teacherRecord)
    this.teachers.push(teacherRecord)
    this.subject.next(this.teachers)
    return this.http.post<any>(this.addTeacherUrl, teacherRecord)
  }

  getTeacherRecords() {
    return this.http.get<any>(this.getTeacherRecordsUrl, {
     observe: "body" 
    })
  }
}
