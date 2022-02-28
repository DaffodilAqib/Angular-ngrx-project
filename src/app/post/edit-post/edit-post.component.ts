import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscriber, Subscription } from 'rxjs';
import { Post } from 'src/app/modules/posts.module';
import { updatePostStart } from '../state/post.actions';
import { getPostById } from '../state/post.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {

  postForm =  new FormGroup({
    title: new FormControl("",[Validators.required]),
    description: new FormControl("",[Validators.required])
  });
  id!: string;
  postSubscription = new Subscription();
  constructor(private activeRouter:ActivatedRoute,
    private store: Store,
    private router: Router
    ){ }

  ngOnInit(): void {
    this.postSubscription = this.store.select(getPostById).subscribe((post)=>{
      if(post){
        this.postForm.setValue({title: post.title, description: post.description});
      }
    })
    // this.activeRouter.paramMap.subscribe((data: any)=>{
    //   console.log("active router: -",data);
    //   console.log("active 2", data.params)
    //   this.id = data.params.id;
    //   const id = data.params.id;
    //   console.log("id:-", id);
    //   this.postSubscription = this.store.select(getPostById, {id}).subscribe(res=>{
    //     console.log("data from store:-",res);
    //     this.postForm.setValue({title: res.title, description: res.description});
    //   })
    // })
  }
  ngOnDestroy(): void {
      if(this.postSubscription){
        this.postSubscription.unsubscribe();
      }
  }
  onUpdatePost(){
    console.log("onUpdatePost:-",this.postForm.value);
    const title = this.postForm.value.title;
    const description = this.postForm.value.description;
    const post : Post = {
      id: this.id,
      title,
      description
    }
    console.log("Update Post:-",post);
    this.store.dispatch(updatePostStart({ post }));
    this.router.navigate(['post']);
  }

}
