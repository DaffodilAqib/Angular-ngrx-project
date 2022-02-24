import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/Shared/shared.action';
import { loginStart } from '../state/auth.action';

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
  constructor(private store: Store<AppState>) { }

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
    const email = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.store.dispatch(setLoadingSpinner({status: true}));
    this.store.dispatch(loginStart({email, password}));
  }

}
