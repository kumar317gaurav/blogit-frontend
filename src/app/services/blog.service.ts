// blog.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../data/post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  protected blogList:Post[]=[
    {
      id:1,
      title: "The Wonders of Space",
      image: "/assets/img.jpg",
      desc: "An exploration into the vast mysteries of outer space, from black holes to distant galaxies.",
      date: "2024-08-29",
      author: "alice"
  },
  {
      id:2,
      title: "The Rise of AI",
      image: "/assets/img.jpg",
      desc: "How artificial intelligence is transforming industries and our daily lives.",
      date: "2024-08-28",
      author: "alice"
  },
  {
      id:3,
      title: "Traveling Through Time",
      image: "/assets/img.jpg",
      desc: "A fascinating journey through the concept of time travel and its impact on science fiction.",
      date: "2024-08-27",
      author: "Carol White"
  },
  {
      id:4,
      title: "The Future of Renewable Energy",
      image: "/assets/img.jpg",
      desc: "Innovations and advancements in renewable energy sources that could power the future.",
      date: "2024-08-26",
      author: "David Brown"
  },
  ];

  constructor(private http: HttpClient) {}

  getAllBlogs(): Post[]{
    return this.blogList;
  }
  getBlogById(id: number):Post | undefined {
    return this.blogList.find(Post=>Post.id===id);
  }
}
