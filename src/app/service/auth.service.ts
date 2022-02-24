import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponseData } from '../modules/AuthResponseData.model';
import { Observable } from 'rxjs';
import { User } from '../modules/user.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(data: {}): Observable<AuthResponseData>{
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`,data)
  }
  formatUser(data: AuthResponseData){
    const user = new User(data.email, data.idToken, data.localId);
    return user;
  }
  signup(data: {email:string, password: string}){
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIREBASE_API_KEY}`,data);
  }
}
