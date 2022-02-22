import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscriber, Subscription } from 'rxjs';
import { Post } from 'src/app/modules/posts.module';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {

  postForm : FormGroup | any;
  postSubscription = new Subscription();
  constructor(private activeRouter:ActivatedRoute,
    private store: Store){ }

  ngOnInit(): void {
    
    this.activeRouter.paramMap.subscribe((data: any)=>{
      console.log("active router: -",data);
      console.log("active 2", data.params)
      const id = data.params.id;
      console.log("id:-", id);
      this.postSubscription = this.store.select(getPostsById, {id}).subscribe(res=>{
        console.log("data from store:-",res);
        this.createForm();
      })
    })
  }
  createForm(){
    this.postForm = new FormGroup({
      title: new FormControl(""),
      description: new FormControl("")
    });
  }
  ngOnDestroy(): void {
      if(this.postSubscription){
        this.postSubscription.unsubscribe();
      }
  }
  onUpdatePost(){
    
  }

}
function getPostsById(getPostsById: any, arg1: { id: any; }) {
  throw new Error('Function not implemented.');
}

