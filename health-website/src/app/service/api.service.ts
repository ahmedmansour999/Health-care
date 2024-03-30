import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://api-generator.retool.com/yAtmiD/data';

  constructor(private http: HttpClient , private userApi : UsersService  ) { }

  // GET request
  getData(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  // GET request with filter
  getDataWithFilter(name: string, value: string): Observable<any> {
    const url = `${this.baseUrl}?${name}=${value}`;
    return this.http.get<any>(url);
  }

  // GET request by ID
  getDataById(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<any>(url);
  }

  // POST request
  postData(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }

  // PUT request
  putData(id: number, data: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<any>(url, data);
  }

  // PATCH request
  patchData(id: number, data: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.patch<any>(url, data);
  }

  // DELETE request
  deleteData(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
