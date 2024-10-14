// blog-detail.component.ts
import { Component, Input,OnInit,inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Post } from '../../data/post';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailComponent {
  route: ActivatedRoute=inject(ActivatedRoute);
  blogService=inject(BlogService);
  blog_post:Post|undefined;
  constructor() {

    const blogId = Number(this.route.snapshot.params['id']);
    this.blog_post=this.blogService.getBlogById(blogId);
  }
}
