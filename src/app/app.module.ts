import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthService } from './services/auth.service';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AddTeacherComponent } from './admin-dashboard/add-teacher/add-teacher.component';
import { MaterialModule } from './material/material.module';
import { TeacherDetailsComponent } from './admin-dashboard/teacher-details/teacher-details.component';
import { TeachersService } from './services/teachers.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    TeacherComponent,
    AddTeacherComponent,
    TeacherDetailsComponent
  ], 
  entryComponents: [AddTeacherComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [AuthService, TeachersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
