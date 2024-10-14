// blog-detail.component.ts
import { Component, Input,OnInit,inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Post } from '../../data/post';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailComponent {
  route: ActivatedRoute=inject(ActivatedRoute);
  blogService=inject(BlogService);
  blog_post:Post|undefined;
  constructor() {

    const blogId = Number(this.route.snapshot.params['id']);
    this.blogService.getBlogById(blogId).then(blog_post=>{this.blog_post=blog_post;});
  }
}
