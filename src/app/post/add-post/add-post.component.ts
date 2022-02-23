import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/modules/posts.module';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/post.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  addPostForm: FormGroup | any;
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.addPostForm = new FormGroup({
      title:  new FormControl(null,[Validators.required, Validators.minLength(6)]),
      description : new FormControl(null, [Validators.required, Validators.minLength(10)])
    })
  }
  onAddPost(){
    if(this.addPostForm.valid){
      let post: Post = {
        title: this.addPostForm.value.title,
        description: this.addPostForm.value.description
      }
      this.store.dispatch(addPost({ post }));
    }
    console.log(this.addPostForm.value);
    this.router.navigate(['post']);
  }

}
