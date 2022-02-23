import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../modules/posts.module';
import { AppState } from '../store/app.state';
import { deletePost } from './state/post.actions';
import { getPosts } from './state/post.selector';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts$ = new Observable<Post[]>()
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
  }
  onDeletePost(id:any){
    if(confirm("Are you sure??")){
      console.log("deleting post");
      this.store.dispatch(deletePost({ id }));
    }
    console.log(id);
  }

}
