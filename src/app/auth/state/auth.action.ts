import { createAction, props } from "@ngrx/store";

export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCESS = '[auth page] login success';
export const LOGIN_FIAL = '[auth page] login fail';

export const loginStart = createAction(
    LOGIN_START, props<{email: any;password: any}>()
);

export const loginSuccess = createAction(LOGIN_SUCESS);