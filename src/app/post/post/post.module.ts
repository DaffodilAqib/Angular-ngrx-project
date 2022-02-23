import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from '../post.component';
import { AddPostComponent } from '../add-post/add-post.component';
import { EditPostComponent } from '../edit-post/edit-post.component';
import { ReactiveFormsModule} from '@angular/forms';
import { MaterialExampleModule } from 'src/material.module';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from '../state/post.reducer';
import { POST_STATE_NAME } from '../state/post.selector';


@NgModule({
  declarations: [
    PostComponent,
    AddPostComponent,
    EditPostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule,
    MaterialExampleModule,
    StoreModule.forFeature(POST_STATE_NAME,postsReducer)
  ]
})
export class PostModule { }
