import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CounterComponent } from './counter/counter/counter.component';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './post/add-post/add-post.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"counter",component:CounterComponent},
  {path:"post",component:PostComponent,
    children:[
      {path:"add", component: AddPostComponent},
      {path:"edit/:id", component: EditPostComponent}
    ]
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }