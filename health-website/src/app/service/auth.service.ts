import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {




  constructor(private http:HttpClient) { }
  register(userData:object){
    return this.http.post(`http://localhost:8000/api/register`,userData);
  }
  login(userData:object){
    return this.http.post(`http://localhost:8000/api/login`,userData);
  }

  logout(): Observable<any> {
    return this.http.post<any>('/api/logout', {});
  }

  departemnt(): Observable<any>{
    return this.http.get(`http://127.0.0.1:8000/api/department`);
  }
}
