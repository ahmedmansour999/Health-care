import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {


  private departmentUrl = 'http://127.0.0.1:8000/api/department';
  private departmentName = 'http://127.0.0.1:8000/api/departments';
  private authToken :string = '';

  constructor( private http :HttpClient  ) { }


  getAllDepartment(): Observable<any> {
    const    authToken : any = localStorage.getItem('user');
    const   Api : any = JSON.parse(authToken);
    const  token = Api.token
    return this.http.get(this.departmentUrl, { headers : {
      'Authorization': `Bearer ${token}` ,
      'Content-Type': 'application/json'
    } });
  }

  getDepartmentByName(name: string): Observable<any> {
    const authToken: any = localStorage.getItem('user');
    const Api: any = JSON.parse(authToken);
    const token = Api.token;
    return this.http.get(`${this.departmentName}/${name}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  }




}
