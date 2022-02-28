import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CounterComponent } from './counter/counter/counter.component';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './post/add-post/add-post.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { PostComponent } from './post/post.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"counter",
  loadChildren: ()=> import('./counter/counter/counter.module').then((m)=> m.CounterModule)
  },
  {path:"post",
    loadChildren: ()=> import('./post/post/post.module').then((m)=>m.PostModule),
    canActivate: [AuthGuard]
  },
  {
    path:"auth",
    loadChildren: ()=> import('./auth/auth.module').then((m)=> m.AuthModule)
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }