import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/modules/posts.module";

export const ADD_POST_ACTION = '[posts page] add post';
export const ADD_POST_SUCCESS = '[posts page] post added sucess';

export const UPDATE_POST_ACTION = '[posts page] update post';
export const UPDATE_POST_ACTION_SUCCESS = '[posts page] update post success';

export const DELETE_POST_ACTION = '[posts page] delete post';
export const DELETE_POST_ACTION_SUCCESS = '[posts page] delete post success';

export const LOAD_POST = '[posts page] load posts';
export const LOAD_POST_SUCCESS = '[posts page] load posts success';

export const addPostStart = createAction(ADD_POST_ACTION, props<{ post: Post }>());
export const addPostSuccess = createAction(ADD_POST_SUCCESS,props<{post: Post}>());

export const updatePostStart = createAction(UPDATE_POST_ACTION, props<{ post: Post }>());
export const updatePostSuccess = createAction(UPDATE_POST_ACTION_SUCCESS, props<{ post: Post }>());

export const deletePostStart = createAction(DELETE_POST_ACTION,props<{id: string}>());
export const deletePostSuccess = createAction(DELETE_POST_ACTION_SUCCESS, props<{id: string}>());


export const loadPost = createAction(LOAD_POST);
export const loadPostSucess = createAction(LOAD_POST_SUCCESS, props<{post: Post[]}>());
