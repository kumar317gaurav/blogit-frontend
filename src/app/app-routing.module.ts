import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './features/sign-up/sign-up.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/signup', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
