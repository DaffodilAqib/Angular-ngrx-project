import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, tap } from "rxjs";

import { PostsService } from "src/app/service/posts.service";
import { addPostStart, addPostSuccess, deletePostStart, deletePostSuccess, loadPost, loadPostSucess, updatePostStart, updatePostSuccess } from "./post.actions";

@Injectable()
export class PostEffects {
    constructor(private action$: Actions, private postsService: PostsService){

    }
    loadPosts$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(loadPost),
            mergeMap((action)=>{
                return this.postsService.getPosts().pipe(
                    map((posts)=>{
                        console.log("effect:- ",posts);
                         return loadPostSucess({post:posts});
                    })
                )
            })
        )
    });
    addPost$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(addPostStart),
            mergeMap((action)=>{
                return this.postsService.postData( {"fields":{
                    "title": {"stringValue": action.post.title},
                "description": {"stringValue": action.post.description}
                }}).pipe(
                    map((post)=>{
                        console.log("ADDed Post :-",post);
                        return addPostSuccess({post: post})
                    })
                )
            })
        )
    });
    updatePost$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(updatePostStart),
            mergeMap((action)=>{
                return this.postsService.updatePost(action.post.id,{"fields":{
                    "title": {"stringValue": action.post.title},
                "description": {"stringValue": action.post.description}
                }}).pipe(
                    map((post)=>{
                        console.log("Update Effect Post Completed:-",post);
                        return updatePostSuccess({post: action.post})
                    })
                )
            })
        )
    });
    deletePost$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(deletePostStart),
            mergeMap((action)=>{
                return this.postsService.deletePost(action.id).pipe(
                    map((deletePost)=>{
                        console.log("Delete Effect Post Completed",action.id);
                        return deletePostSuccess({id: action.id})
                    })
                )
            })
        )
    })
    
}