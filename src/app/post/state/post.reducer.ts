import { createReducer, on } from "@ngrx/store";
import { addPost, deletePost, updatePost } from "./post.actions";
import { initialState } from "./post.state";


const _postsReducer = createReducer(initialState, 
    on(addPost, (state, action: any)=>{
        let post = {...action.post};
        post.id= (state.posts.length+1).toString();
        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),
    on(updatePost, (state: any, action: any)=>{
        const updatePosts = state.posts.map((post: any)=>{
            return action.post.id === post.id ? action.post : post;
        })
        return {
            ...state,
            posts: updatePosts
        }
    }),
    on(deletePost, (state, action)=>{
        const updatePosts = state.posts.filter((post:any)=>{
            return post.id != action.id;
        })
        return {
            ...state,
            posts: updatePosts
        }
    })
    )

export function postsReducer(state: any,action: any){
    return _postsReducer(state,action);
}