import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable, pipe, pluck } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../modules/posts.module';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  getPosts(){
    return this.http.get<Post[]>(environment.POSTS_URL).pipe(
      pluck('documents'),
      map((data: any)=>{
        let posts= [];
        for(let post of data){
          let arr = post.name.split("/");
          posts.push({id: arr.pop(), title: post.fields.title.stringValue, description: post.fields.description.stringValue})      
        }
        return posts;
      })
    )
  }
  postData(data: any){
    return this.http.post(environment.POSTS_URL,data).pipe(
      map((response: any)=>{
        let arr = (response.name).split("/")
        return {id: arr.pop(), title: response.fields.title.stringValue, description: response.fields.description.stringValue}
      })
    )
  }
}
