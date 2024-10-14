// blog.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../data/post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  protected blogList:Post[]=[];

  constructor(private http: HttpClient) {}

  getAllBlogs(): Post[]{
    return this.blogList;
  }
  getBlogById(id: number):Post | undefined {
    return this.blogList.find(Post=>Post.id===id);
  }
}
