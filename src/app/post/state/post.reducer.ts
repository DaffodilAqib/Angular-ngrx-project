import { createReducer, on } from "@ngrx/store";
import { addPostSuccess, deletePostSuccess, loadPostSucess, updatePostSuccess } from "./post.actions";
import { initialState } from "./post.state";


const _postsReducer = createReducer(initialState, 
    on(addPostSuccess, (state, action: any)=>{
        return {
            ...state,
            posts: [...state.posts, action.post]
        }
    }),
    on(updatePostSuccess, (state: any, action: any)=>{
        const updatePosts = state.posts.map((post: any)=>{
            return action.post.id === post.id ? action.post : post;
        })
        return {
            ...state,
            posts: updatePosts
        }
    }),
    on(deletePostSuccess, (state, action)=>{
        const updatePosts = state.posts.filter((post:any)=>{
            return post.id != action.id;
        })
        return {
            ...state,
            posts: updatePosts
        }
    }),
    on(loadPostSucess, (state, action: any)=>{
        return {
            ...state,
            posts: action.post
        }
    })
    )

export function postsReducer(state: any,action: any){
    return _postsReducer(state,action);
}