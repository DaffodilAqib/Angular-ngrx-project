import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";

import { PostsState } from "./post.state";

const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState,(state)=>{
    return state.posts;
})

export const getPostById = createSelector(getPostsState, (state: any, props: any)=>{
    return state.posts[(props.id)-1];
})