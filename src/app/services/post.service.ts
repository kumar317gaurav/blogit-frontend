import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Post {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  date: string;
}
interface PostCreated{
  title: string;
  content: string;
  category: string;
  image: '';

}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:3000/posts';
  private posts_createdUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
 delete_blog(id:any):Observable<any>{
  return this.http.post(this.apiUrl,id);
 }
  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${post.id}`, post);
  }
  editPosts(post: PostCreated): Observable<PostCreated>{
    return this.http.put<PostCreated>(`${this.posts_createdUrl}`,post);
  }

  

}
