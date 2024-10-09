// blog.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl = 'http://your-api-url.com/api/blogs';

  constructor(private http: HttpClient) {}

  getBlogById(id: string) {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
}
