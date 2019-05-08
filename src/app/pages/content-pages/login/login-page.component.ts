import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../serviceprovider/authentication.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
  //variable initialization
  loginForm;

  model: any ={};
  public errorMsg = '';

  //constructor initialization
  constructor(
        private _fbuilder: FormBuilder,
    private route: Router,
    private _authService: AuthenticationService) {
      this.loginForm = _fbuilder.group({
        email: [''],
        password: [''],
        fcmToken: ['hello123']
      });
  }

  //ngOnInit method for load data.
  ngOnInit() {
    //clear everything using logout.
    this._authService.logout();   
  }

  //This method use for Login
  login(user) {
    if (this.loginForm) {
        console.log(this.loginForm)
      // if(this.loginForm.username !== undefined && this.loginForm.username !== null &&
      //   this.loginForm.password !== undefined && this.loginForm.password !== null){
      //     //Call Login service for validate username and password.
          this._authService.login(this.loginForm.value.email, this.loginForm.value.password, this.loginForm.value.fcmToken)
            .subscribe(result => {
                console.log(result, 'checking out the results')
              if (result === true) {
                  // login successful
                  this.route.navigate(['dashboard/dashboard1']);
              } else {
                  // login failed
                  this.errorMsg = 'Username or password is incorrect.';
              }
          });         
      
    }
    else{
      this.errorMsg = 'login failed, Please try again!';
    }
  }

    go(){
        this.route.navigate(['dashboard/dashboard1'])
    }
    onSubmit() {
        this.route.navigate(['dashboard/dashboard1'])
    }
}