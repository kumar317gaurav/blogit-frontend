import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './features/sign-up/sign-up.component';
import { LoginComponent } from './features/login/login.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { BlogDetailComponent } from './features/blog-details/blog-details.component';
import { HomeComponent } from './features/home/home.component';
import { ProfileComponent } from './features/profile/profile.component';
import { CreateBlogComponent } from './features/create-blog/create-blog.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'create-blog', component: CreateBlogComponent },
  {path:'aboutus',component:AboutUsComponent},
  { path: 'details/:id', component: BlogDetailComponent },
  {path: 'login', component: LoginComponent, canActivate: [authGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
