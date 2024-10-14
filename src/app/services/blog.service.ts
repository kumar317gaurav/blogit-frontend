// blog.service.ts
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  url='http://localhost:8080/api/blogs/all';

  urlId='http://localhost:8080/api/blogs/{id}';

  constructor() {}

  async getAllBlogs(): Promise<Post[]>{
    const data= await fetch(this.url);
    return await data.json() ?? [];
  }
  async getBlogById(id: number):Promise<Post | undefined> {
    const data=await fetch(`${this.urlId}/${id}`);
    return await data.json() ?? {};
  }
}
