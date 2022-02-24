import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/Shared/shared.action';
import { signupStart } from '../state/auth.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide = true;
  signupForm = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required])
  })
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }
  getErrorMessage() {
    if (this.signupForm.value.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.signupForm.value.username.hasError('email') ? 'Not a valid email' : '';
  }
  onSubmit(){
    console.log("Sign up Form :-",this.signupForm.value);
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    this.store.dispatch(setLoadingSpinner({status: true}));
    this.store.dispatch(signupStart({email,password}));
  }

}
