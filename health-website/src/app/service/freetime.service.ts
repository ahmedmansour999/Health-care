import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class FreetimeService {
  private baseUrl = 'http://127.0.0.1:8000/api/freetimes';
  private freeTimeDoc = 'http://127.0.0.1:8000/api/freetimesDoc' ;
  private freeTimeDocFront = 'http://127.0.0.1:8000/api/freetimesDocFront' ;
  private authToken :string = '';

  Header : any = {
    'Authorization': this.authToken ,
    'Content-Type': 'application/json'
  };

  constructor(private http: HttpClient , private localApi : LocalStorageService) {}

  ngOnInit(): void {
    const userData = this.localApi.getData('user');
    if (userData && userData.token) {
      this.authToken = userData.token;
    }
  }

  getAllFreetimes(doctorId: number): Observable<any[]> {

    return this.http.get<any[]>(`${this.freeTimeDoc}/${doctorId}`);

  }
  getAllFreetimesFront(doctorId: number): Observable<any[]> {

    return this.http.get<any[]>(`${this.freeTimeDocFront}/${doctorId}`);

  }

  createFreetime(freetime: any): Observable<any> {
    return this.http.post(this.baseUrl, freetime);
  }

  updateFreetime(id: number, freetime: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, freetime);
  }

  deleteFreetime(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }




}
