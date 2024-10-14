import { Component,inject } from '@angular/core';
import { Post } from '../../data/post';
import { BlogService } from '../../services/blog.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  blogsList:Post[]=[];
  blogService:BlogService=inject(BlogService);

  constructor(){
    this.blogService.getAllBlogs().then((blogsList:Post[])=>{this.blogsList=blogsList;});
  }
}
