import { state } from "@angular/animations";
import { createFeatureSelector, createSelector, props } from "@ngrx/store";
import { RouterStateUrl } from "src/app/service/custom-route-serializer";
import { getCurrentRoute } from "src/app/service/router.selector";

import { PostsState } from "./post.state";
export const POST_STATE_NAME = "posts";
const getPostsState = createFeatureSelector<PostsState>(POST_STATE_NAME);

export const getPosts = createSelector(getPostsState,(state)=>{
    return state.posts;
})

export const getPostById = createSelector(getPostsState, getCurrentRoute,(state: any, route: RouterStateUrl)=>{
    
    
    // return state.posts[(props.id)-1];
    // console.log("id#:-",props.id);
    // console.log("# state:-", state.posts)
    if(state.posts){
        for(let post of state.posts){
            if(post.id== route.params['id']){
                return post
            }
        }
    }
    else{
        return null;
    }
})