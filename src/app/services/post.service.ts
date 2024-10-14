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

interface User{
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:8080/api/blogs';
  private posts_createdUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/all`);
  }
 delete_blog(id:number):Observable<any>{
  return this.http.post(`${this.apiUrl}/delete/id`,id);
 }
  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}/create`, post);
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${post.id}`, post);
  }
  editPosts(post: PostCreated): Observable<PostCreated>{
    return this.http.put<PostCreated>(`${this.posts_createdUrl}`,post);
  }

  updateProfile(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${user.username}`, user);
    
    

    
  }
  

}
