import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Post } from "src/app/modules/posts.module";

export interface PostsState extends EntityState<Post>{
    count: number;
}

export const postsAdapter = createEntityAdapter<Post>({
    sortComparer: sortByName,
});
export const initialState: PostsState = postsAdapter.getInitialState({
    count: 0,
});
export function sortByName(a: Post, b: Post): number{
    return a.title.localeCompare(b.title);
}