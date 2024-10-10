import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignupComponent } from './features/sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './features/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeroComponent } from './features/hero/hero.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateBlogComponent } from './features/create-blog/create-blog.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { BlogDetailComponent } from './features/blog-details/blog-details.component';
import { SidebarComponent } from './features/sidebar/sidebar.component';
import { BlogPostComponent } from './features/blog-post/blog-post.component';
import { HomeComponent } from './features/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    CreateBlogComponent,
    AboutUsComponent,
    BlogDetailComponent,
    HeroComponent,
    SidebarComponent,
    BlogPostComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,BlogDetailComponent]
})
export class AppModule { }
