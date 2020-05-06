import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/shared/teacher.model';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/custom-validator/custome-validator';
import { TeachersService } from 'src/app/services/teachers.service';

export interface branch {
  value: string;
  viewValue: string;
}

export interface subject {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  teachers: Teacher[] = [];

  branchs: branch[] = [
    {value: 'CSE', viewValue: 'CSE'},
    {value: 'MECH', viewValue: 'MECH'},
    {value: 'CIVIL', viewValue: 'CIVIL'}
  ];

  subjects: subject[] = [];

  teachersValidation = new FormGroup({
    userName: new FormControl('', [
      Validators.required
    ]),
    fullName: new FormControl('',[
      Validators.required
    ]),
    branch: new FormControl('',[
      Validators.required
    ]),
    subject: new FormControl('',[
      Validators.required
    ]),
    semester: new FormControl('',[
      Validators.required
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")
    ]),
    confirmPassword: new FormControl('', [
      Validators.required
    ])
  }, {
    validators: CustomValidators.passwordMatchValidator
  })

  constructor(private dialog: MatDialogRef<AddTeacherComponent>,  private teacherServ: TeachersService) { }

  ngOnInit() {
  }
  branchChanges(val: any) {
    console.log("branchChanges is working")
    console.log(val)

    if(val == "CSE") {
      this.subjects = [
        {value: 'java', viewValue: 'java' },
        {value: 'c++', viewValue: 'c++' },
        {value: 'DMBS', viewValue: 'DMBS' },
        {value: 'Graphics Design', viewValue: 'Graphics Design' },
    ]
    } else if(val == "MECH") {
      this.subjects = [
        {value: 'Thermo', viewValue: 'Thermo' },
        {value: 'FME', viewValue: 'FME' },
        {value: 'MOAS', viewValue: 'MOAS' },
    ]
    } else if(val == "CIVIL") {
      this.subjects = [
        {value: 'Baisc civil', viewValue: 'basic civil' },
        {value: 'construction', viewValue: 'construction' },
        {value: 'buildings', viewValue: 'buildings' },
    ]
    }
  }
  get validations() {
    return this.teachersValidation.controls;
  }

  displayDetails() {
    this.teacherServ.addTeachers(this.teachersValidation.value)
    this.dialog.close(this.teachersValidation.value)
  }
}
