import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor( private http:HttpClient) { }

  AllPosts(){
   return this.http.get('http://127.0.0.1:8000/api/posts')
  }
  addPost(postData: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/posts', postData);
  }
}
