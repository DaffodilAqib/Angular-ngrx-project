import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";

import { PostsState } from "./post.state";
export const POST_STATE_NAME = "posts";
const getPostsState = createFeatureSelector<PostsState>(POST_STATE_NAME);

export const getPosts = createSelector(getPostsState,(state)=>{
    return state.posts;
})

export const getPostById = createSelector(getPostsState, (state: any, props: any)=>{
    // return state.posts[(props.id)-1];
    console.log("id#:-",props.id);
    console.log("# state:-", state.posts)
    for(let post of state.posts){
        if(post.id==props.id){
            return post
        }
    }
})