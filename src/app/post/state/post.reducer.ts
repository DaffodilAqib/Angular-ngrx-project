import { createReducer, on } from "@ngrx/store";
import { addPostSuccess, deletePostSuccess, loadPostSucess, updatePostSuccess } from "./post.actions";
import { initialState, postsAdapter } from "./post.state";


const _postsReducer = createReducer(initialState, 
    on(addPostSuccess, (state, action: any)=>{
        return postsAdapter.addOne(action.post, {
            ...state,
            count: state.count+1
        });
    }),
    on(updatePostSuccess, (state: any, action: any)=>{
       return postsAdapter.updateOne(action.post, state);
    }),
    on(deletePostSuccess, (state, { id })=>{
        return postsAdapter.removeOne(id, state);
    }),
    on(loadPostSucess, (state, action: any)=>{
        console.log("state of LoadPostSudess :-",action.post);
       return postsAdapter.setAll(action.post, {
        ...state,
        count: state.count+1
    });
    })
    )

export function postsReducer(state: any,action: any){
    return _postsReducer(state,action);
}