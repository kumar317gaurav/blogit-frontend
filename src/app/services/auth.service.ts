import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  private postUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  signup(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
  login(user1: any): Observable<any> {
    return this.http.post(this.apiUrl,user1);
  }
  createblog(post: any): Observable<any> {
    return this.http.post(this.postUrl, post);
  }


}