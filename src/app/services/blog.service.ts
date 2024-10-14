// blog.service.ts
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Post } from '../data/post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  protected blogList:Post[]=[];


  url='http://localhost:3000/blogs';

  constructor() {}

  async getAllBlogs(): Promise<Post[]>{
    const data= await fetch(this.url);
    return await data.json() ?? [];
  }
  async getBlogById(id: number):Promise<Post | undefined> {
    const data=await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
}
