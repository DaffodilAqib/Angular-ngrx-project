import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { exhaustMap, last, Observable, take} from 'rxjs';
import { Store } from '@ngrx/store';
import { getToken } from '../auth/state/auth.selector';
import { AppState } from '../store/app.state';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private store: Store<AppState>){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return this.store.select(getToken).pipe(
        take(1),
        exhaustMap((token)=> {
          
            console.log("Token in intercetpr:-",token);
            if(!token){
                return next.handle(req);
            }

            let modifiedReq = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
            return next.handle(modifiedReq);
        })
    )
  }
}