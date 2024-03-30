import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  commentApi = 'http://127.0.0.1:8000/api/comments' ;


  constructor(private http: HttpClient , private localApi : LocalStorageService) {

  }





  getAllcomments(doctorId: number): Observable<any> {
    const url = `${this.commentApi}?doctor_id=${doctorId}`;
    return this.http.get(url);
  }



  addComment(commentData : any): Observable<any>{
    const    authToken : any = localStorage.getItem('user');
    const   Api : any = JSON.parse(authToken);
    const  token = Api.token
    return this.http.post(this.commentApi, commentData, {
      headers: {
      'Authorization': `Bearer ${token}` ,
      'Content-Type': 'application/json'
    }
    });
  }


  UpdataComment(id: number, updateComment: any): Observable<any> {
    const    authToken : any = localStorage.getItem('user');
    const   Api : any = JSON.parse(authToken);
    const  token = Api.token
    const url = `${this.commentApi}/${id}`;
    return this.http.put(url, updateComment, { headers : {
      'Authorization': `Bearer ${token}` ,
      'Content-Type': 'application/json'
    } });
  }

  deleteComment(id: number): Observable<any> {
    const    authToken : any = localStorage.getItem('user');
    const   Api : any = JSON.parse(authToken);
    const  token = Api.token
    const url = `${this.commentApi}/${id}`;


    return this.http.delete(url, { headers : {
      'Authorization': `Bearer ${token}` ,
      'Content-Type': 'application/json'
    } });
  }




}
