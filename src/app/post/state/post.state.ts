import { Post } from "src/app/modules/posts.module";

export interface PostsState{
    posts: Post[]
}

export const initialState = {
    posts:[
        {id: '1', title:'sample title 1', description: 'Sample Description 1'}
    ]
}