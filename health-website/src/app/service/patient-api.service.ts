import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PatientApiService {

  private patientApi = 'http://127.0.0.1:8000/api/patients';
  private authToken :string = '';

  Header : any = {
    'Authorization': this.authToken ,
    'Content-Type': 'application/json'
  };

  constructor(private http: HttpClient , private localApi : LocalStorageService) {}

  ngOnInit(): void {
 
  }

  getAllpatients(): Observable<any> {
    const    authToken : any = localStorage.getItem('user');
    const   Api : any = JSON.parse(authToken);
    const  token = Api.token
    return this.http.get(this.patientApi, { headers : {
      'Authorization': `Bearer ${token}` ,
      'Content-Type': 'application/json'
    } });
  }

  getOnepatient(id : number ){
    const    authToken : any = localStorage.getItem('user');
    const   Api : any = JSON.parse(authToken);
    const  token = Api.token
    const url = `${this.patientApi}/${id}`;
    return this.http.get(url , {
      headers : {
        'Authorization': `Bearer ${token}` ,
        'Content-Type': 'application/json'
      }
    } )
  }


  addpatient(appointmentData : any): Observable<any>{
    const    authToken : any = localStorage.getItem('user');
    const   Api : any = JSON.parse(authToken);
    const  token = Api.token
    return this.http.post(this.patientApi, appointmentData, {

      headers: {
        'Authorization': `Bearer ${token}` ,
        'Content-Type': 'application/json'
      }
    });
  }



  Updatapatient(id: number, updatedAppointmentData: any): Observable<any> {
    const    authToken : any = localStorage.getItem('user');
    const   Api : any = JSON.parse(authToken);
    const  token = Api.token
    const url = `${this.patientApi}/${id}`;
    return this.http.put(url, updatedAppointmentData, { headers : {
      'Authorization': `Bearer ${token}` ,
      'Content-Type': 'application/json'
    } });
  }


  deletepatient(id: number): Observable<any> {
    const    authToken : any = localStorage.getItem('user');
    const   Api : any = JSON.parse(authToken);
    const  token = Api.token
    const url = `${this.patientApi}/${id}`;


    return this.http.delete(url, { headers : {
      'Authorization': `Bearer ${token}` ,
      'Content-Type': 'application/json'
    } });
  }


}
