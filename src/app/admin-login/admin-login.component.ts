import { Component, OnInit } from '@angular/core';
import { AdminUserModel } from '../shared/adminUser.model';
import { UserValidatos } from '../validators/validation';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminDetails = {
    admin_user: String,
    admin_password: String
  };

  // userValidator = UserValidatos

  userValidator = new FormGroup({
    admin_user: new FormControl('', [
        Validators.required]),

    admin_password: new FormControl('',[
      Validators.required
    ])
})

  constructor(private authService: AuthService, private router: Router) { 
    this.adminDetails.admin_user = null;
    this.adminDetails.admin_password = null
  }

  get validations() {
    return this.userValidator.controls;
  }

  ngOnInit() {
  }
  
  onSignup() {
    console.log(this.adminDetails);
    this.authService.adminValidation(this.adminDetails)
    .subscribe(
      res => {
        console.log(res);
        if(res.status == false) {
          console.log("There is some error")
        } else {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/adminhome']);
          console.log("you did it");
        }
      },
      err => console.log(err)
    )
  }

}
