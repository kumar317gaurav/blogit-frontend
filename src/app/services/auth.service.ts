import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';
  private apiUrlRegister = 'http://localhost:8080/api/auth';
  private postUrl = 'http://localhost:8080/api/blogs';

  constructor(private http: HttpClient) { }

  signup(user: any): Observable<any> {
    return this.http.post(`${this.apiUrlRegister}/register`, user);
  }
  login(user1: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`,user1);
  }
  createblog(post: any): Observable<any> {
    return this.http.post(`${this.postUrl}/create`, post);
  }


}