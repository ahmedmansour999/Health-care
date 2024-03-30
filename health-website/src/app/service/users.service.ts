import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { ApiToken } from '../local-storage';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = 'http://127.0.0.1:8000/api/users';




  constructor(private http: HttpClient , private localApi : LocalStorageService ) {

  }

  ngOnInit(): void {

  }

  Alluser():Observable<any>{
    const    authToken : any = localStorage.getItem('user');
    const   Api : any = JSON.parse(authToken);
    const  token = Api.token
    return this.http.get(this.baseUrl, { headers : {
      'Authorization': `Bearer ${token}` ,
      'Content-Type': 'application/json'
    } });
  }

  oneUser(id : number):Observable<any>{
  const    authToken : any = localStorage.getItem('user');
  const   Api : any = JSON.parse(authToken);
  const  token = Api.token

    return this.http.get(`http://127.0.0.1:8000/api/users/${id}`, { headers :  {
        'Authorization': `Bearer ${token}` ,
        'Content-Type': 'application/json'
      }
  })

  }

  deleteUser(id:number):Observable<any>{
    const    authToken : any = localStorage.getItem('user');
    const   Api : any = JSON.parse(authToken);
    const  token = Api.token
    return this.http.delete(`http://127.0.0.1:8000/api/users/${id}`, { headers :  {
      'Authorization': `Bearer ${token}` ,
      'Content-Type': 'application/json'
    }
});

  }


  updateUser(id:number , userData:object):Observable<any>{
    const    authToken : any = localStorage.getItem('user');
    const   Api : any = JSON.parse(authToken);
    const  token = Api.token
    return this.http.patch(`http://127.0.0.1:8000/api/users/${id}`,userData, { headers : {
      'Authorization': `Bearer ${token}` ,
      'Content-Type': 'application/json'
    }}
  );}
  addUser(userData:object):Observable<any>{
    const    authToken : any = localStorage.getItem('user');
    const   Api : any = JSON.parse(authToken);
    const  token = Api.token
    console.log(token , userData)
    return this.http.post(`http://127.0.0.1:8000/api/users`,userData, { headers : {
      'Authorization': `Bearer ${token}` ,
      'Content-Type': 'application/json'
    }}
  );}



}
