import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm = new FormGroup({
    username: new FormControl("",[Validators.required, Validators.email]),
    password: new FormControl("",[Validators.required])
  })
  constructor() { }

  ngOnInit(): void {
  }
  getErrorMessage() {
    if (this.loginForm.value.username.hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginForm.value.username.hasError('email') ? 'Not a valid email' : '';
  }
  onLogin(){
    console.log("Login work fine:-",this.loginForm.value);
  }

}
