import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/modules/posts.module";

export const ADD_POST_ACTION = '[posts page] add post';
export const addPost = createAction(ADD_POST_ACTION, props<{ post: Post }>());