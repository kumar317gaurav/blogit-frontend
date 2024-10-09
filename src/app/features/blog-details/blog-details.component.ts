// blog-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog = null;

  constructor(private route: ActivatedRoute, private blogService: BlogService) {}

  ngOnInit() {
    const blogId = this.route.snapshot.paramMap.get('id');
    if (blogId) {
      this.blogService.getBlogById(blogId).subscribe(data => {
        this.blog = data;
      });
    } else {
      // handle the case where blogId is null
      console.error('Blog ID is null');

  }
}
}