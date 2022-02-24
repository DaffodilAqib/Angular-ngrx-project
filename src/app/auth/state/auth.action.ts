import { createAction, props } from "@ngrx/store";
import { User } from "src/app/modules/user.module";

export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCESS = '[auth page] login success';
export const LOGIN_FAIL = '[auth page] login fail';

export const SIGNUP_START = '[auth page] sign-up start';
export const SIGNUP_SUCCESS = '[auth page] sign-up success';
export const SIGNUP_FAIL = '[auth page] sign-up fail'; 

export const loginStart = createAction(
    LOGIN_START, props<{email: any;password: any}>()
);

export const loginSuccess = createAction(LOGIN_SUCESS, props<{user: User}>())

export const signupStart = createAction(
    SIGNUP_START, props<{email: string, password: string}>()
);

export const signupSuccess = createAction(SIGNUP_SUCCESS, props<{user: User}>())