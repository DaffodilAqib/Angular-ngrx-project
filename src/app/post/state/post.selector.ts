
import { createFeatureSelector, createSelector, props } from "@ngrx/store";

import { RouterStateUrl } from "src/app/service/custom-route-serializer";
import { getCurrentRoute } from "src/app/service/router.selector";

import { postsAdapter, PostsState } from "./post.state";
export const POST_STATE_NAME = "posts";
const getPostsState = createFeatureSelector<PostsState>(POST_STATE_NAME);
export const postsSelectors = postsAdapter.getSelectors();
export const getPosts = createSelector(getPostsState, postsSelectors.selectAll);


export const getPostById = createSelector(
    getPosts, 
    getCurrentRoute, 
    (posts, route: RouterStateUrl) => {
        return posts ? posts[route.params['id']] : null;
})
export const getCount = createSelector(getPostsState, (state)=>state.count )

