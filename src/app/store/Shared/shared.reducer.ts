import { createReducer, on } from "@ngrx/store"
import { setErrorMessage, setLoadingSpinner } from "./shared.action"
import { initialState } from "./shared.state"

const _sharedReducer = createReducer(initialState,
        on(setLoadingSpinner,(state,action)=>{
            return {
                ...state,
                showloading: action.status
            }
        }), on(setErrorMessage,(state,action)=>{
            return {
                ...state,
                errorMessage: action.message
            }
        })
    )

export function SharedReducer(state: any,action: any){
    return _sharedReducer(state,action)
}