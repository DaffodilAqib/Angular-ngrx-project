import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { Store } from "@ngrx/store";

import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { AuthService } from "src/app/service/auth.service";
import { AppState } from "src/app/store/app.state";
import { setErrorMessage, setLoadingSpinner } from "src/app/store/Shared/shared.action";
import { loginStart, loginSuccess, signupStart, signupSuccess } from "./auth.action";

@Injectable()
export class AuthEffects{
    constructor(private action$: Actions,
        private authService: AuthService,
        private store: Store<AppState>,
        private router: Router
        ){

    }

    login$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(loginStart),
            exhaustMap((action)=>{
                return this.authService.login({"email":action.email,"password":action.password}).pipe(
                    map((data)=>{
                        this.store.dispatch(setLoadingSpinner({status: false}));
                        this.store.dispatch(setErrorMessage({message:''}));
                        const user = this.authService.formatUser(data);
                        return loginSuccess({user});
                    }),
                    catchError((message: any)=>{
                        this.store.dispatch(setLoadingSpinner({status: false}));
                        console.log(message.error.error.message);
                        return of(setErrorMessage({message:message.error.error.message}))
                    })
                )
            })
        )
    })
    loginNagivation$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(loginSuccess),
            tap((action) => {
                this.router.navigate(['/']);
            })
        );
    },{ dispatch: false});
    signup$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(signupStart),
            exhaustMap((action)=>{
                return this.authService.signup({email:action.email,password:action.password}).pipe(
                    map((data: any)=>{
                        this.store.dispatch(setLoadingSpinner({status: false}));
                        this.store.dispatch(setErrorMessage({message:''}));
                        const user = this.authService.formatUser(data);
                        return signupSuccess({user});
                    }),
                    catchError((message: any)=>{
                        this.store.dispatch(setLoadingSpinner({status: false}));
                        console.log(message.error.error.message);
                        return of(setErrorMessage({message:message.error.error.message}));
                    })
                )
            })
        )
    });
    signupNagivation$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(signupSuccess),
            tap((action) => {
                this.router.navigate(['/']);
            })
        );
    },{ dispatch: false});

    

}