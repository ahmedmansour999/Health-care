import { subscribe } from 'diagnostics_channel';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentApiService {

  private appointmentUrl = 'http://127.0.0.1:8000/api/appointments';
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


  getAllAppointments(): Observable<any> {
    const    authToken : any = localStorage.getItem('user');
    const   Api : any = JSON.parse(authToken);
    const  token = Api.token
    return this.http.get(this.appointmentUrl, { headers : {
      'Authorization': `Bearer ${token}` ,
      'Content-Type': 'application/json'
    } });
  }

  getOneAppointment(id : number ){
    const    authToken : any = localStorage.getItem('user');
    const   Api : any = JSON.parse(authToken);
    const  token = Api.token
    const url = `${this.appointmentUrl}/${id}`;
    return this.http.get(url , {
      headers : {
      'Authorization': `Bearer ${token}` ,
      'Content-Type': 'application/json'
    }
    } )
  }


  getDocAppointment(id : number ){
    const    authToken : any = localStorage.getItem('user');
    const   Api : any = JSON.parse(authToken);
    const  token = Api.token
    const docUrl = 'http://127.0.0.1:8000/api/appointmentDoc' ;
    const url = `${docUrl}/${id}`;
    return this.http.get(url , {
      headers : {
      'Authorization': `Bearer ${token}` ,
      'Content-Type': 'application/json'
    }
    } )
  }

  getstatusAppointment(id : number , status : string ){
    const    authToken : any = localStorage.getItem('user');
    const   Api : any = JSON.parse(authToken);
    const  token = Api.token
    const docUrl = 'http://127.0.0.1:8000/api/appointmentStatus' ;
    const url = `${docUrl}/${id}/${status}`;
    return this.http.get(url , {
      headers : {
      'Authorization': `Bearer ${token}` ,
      'Content-Type': 'application/json'
    }
    } )
  }





  addAppointment(appointmentData : any): Observable<any>{
    const    authToken : any = localStorage.getItem('user');
    const   Api : any = JSON.parse(authToken);
    const  token = Api.token
    return this.http.post(this.appointmentUrl, appointmentData, {
      headers: {
      'Authorization': `Bearer ${token}` ,
      'Content-Type': 'application/json'
    }
    });
  }



  updateAppointment(id: number, updatedAppointmentData: any): Observable<any> {
    const    authToken : any = localStorage.getItem('user');
    const   Api : any = JSON.parse(authToken);
    const  token = Api.token
    const url = `${this.appointmentUrl}/${id}`;
    return this.http.put(url, updatedAppointmentData, { headers : {
      'Authorization': `Bearer ${token}` ,
      'Content-Type': 'application/json'
    } });
  }


  deleteAppointment(id: number): Observable<any> {
    const    authToken : any = localStorage.getItem('user');
    const   Api : any = JSON.parse(authToken);
    const  token = Api.token
    const url = `${this.appointmentUrl}/${id}`;


    return this.http.delete(url, { headers : {
      'Authorization': `Bearer ${token}` ,
      'Content-Type': 'application/json'
    } });
  }


}
