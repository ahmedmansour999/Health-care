import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorsApiService {

  private doctorApi = 'http://127.0.0.1:8000/api/doctors';
  private authToken :string = '';

  Header : any = {
    'Authorization': this.authToken ,
    'Content-Type': 'application/json'
  };


  constructor(private http: HttpClient , private localApi : LocalStorageService) {
    const userData = this.localApi.getData('user');
    if (userData && userData.token) {
      this.authToken = userData.token;
    }
  }

  ngOnInit(): void {

  }

  getAllDoctors(): Observable<any> {
    return this.http.get(this.doctorApi);
  }

  getOneDoctors(id : number ){
    const url = `${this.doctorApi}/${id}`;
    return this.http.get(url )
  }


  addDoctor(appointmentData : any): Observable<any>{
    const    authToken : any = localStorage.getItem('user');
    const   Api : any = JSON.parse(authToken);
    const  token = Api.token
    return this.http.post(this.doctorApi, appointmentData, {
      headers: {
      'Authorization': `Bearer ${token}` ,
      'Content-Type': 'application/json'
    }
    });
  }



  UpdataDoctor(id: number, updatedAppointmentData: any): Observable<any> {
    const    authToken : any = localStorage.getItem('user');
    const   Api : any = JSON.parse(authToken);
    const  token = Api.token
    const url = `${this.doctorApi}/${id}`;
    return this.http.put(url, updatedAppointmentData, { headers : {
      'Authorization': `Bearer ${token}` ,
      'Content-Type': 'application/json'
    } });
  }


  deleteDoctor(id: number): Observable<any> {
    const    authToken : any = localStorage.getItem('user');
    const   Api : any = JSON.parse(authToken);
    const  token = Api.token
    const url = `${this.doctorApi}/${id}`;


    return this.http.delete(url, { headers : {
      'Authorization': `Bearer ${token}` ,
      'Content-Type': 'application/json'
    } });
  }

}
