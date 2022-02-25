
import {Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/app.state';
import { getError, getLoading } from './store/Shared/shared.selector';
import { isAuthenticate } from './auth/state/auth.selector';
import { autoLogin, autoLogOut } from './auth/state/auth.action';
import { setLoadingSpinner } from './store/Shared/shared.action';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngRx Store';
  showLoading = new Observable<boolean>();
  showError = new Observable<string>();
  isAuthenticated = new Observable<boolean>();
  constructor(private store: Store<AppState>){
    
  }
  ngOnInit(): void {
      this.showLoading = this.store.select(getLoading);
      this.showError = this.store.select(getError);
      this.isAuthenticated = this.store.select(isAuthenticate);
      this.store.dispatch(autoLogin());
  }
  onLogOut(){
    this.store.dispatch(setLoadingSpinner({status: true}));
    this.store.dispatch(autoLogOut());
  }

  
  
}
