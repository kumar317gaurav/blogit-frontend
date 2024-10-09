import { Component,Input } from '@angular/core';
import { Post } from '../../data/post';
@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
  @Input() post!:Post
}
