import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Update } from "@ngrx/entity";
import { RouterNavigatedAction, routerNavigatedAction, routerNavigationAction, ROUTER_NAVIGATION } from "@ngrx/router-store";
import { filter, map, mergeMap, switchMap, tap } from "rxjs";
import { Post } from "src/app/modules/posts.module";

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
            mergeMap((action: any)=>{
                return this.postsService.updatePost(action.post.id,{"fields":{
                    "title": {"stringValue": action.post.title},
                "description": {"stringValue": action.post.description}
                }}).pipe(
                    map((post)=>{
                        console.log("Update Effect Post Completed:-",post);
                        const updatedPost: Update<Post> = {
                            id: action.post.id,
                            changes: {
                                ...action.post,
                            }
                        };
                        return updatePostSuccess({post: updatedPost });
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
    });
    getSinglePost$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(ROUTER_NAVIGATION),
            filter((r: RouterNavigatedAction)=>{
                return r.payload.routerState.url.startsWith('/posts/details');
            }),
            map((r: RouterNavigatedAction)=>{
                return r.payload.routerState['root']['params']['id'];
            }),
            switchMap((id)=>{
                return this.postsService.getPostById(id).pipe(map((post)=>{
                    const postData = [{...post,id}];
                    return loadPostSucess({post: postData})
                }))
            })
        )
    })
    
}