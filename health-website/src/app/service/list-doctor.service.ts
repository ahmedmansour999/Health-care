import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListDoctor } from '../interface/list-doctor';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ListDoctorService {

   allDoctor = `https://ecommerce.routemisr.com/api/v1/products` ;
    reviewOfDoctor=`https://retoolapi.dev/SJTBhb/data` ;
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



  getAllDoctor(){
    return this.http.get(this.allDoctor)
  }


  DoctorDetails(id : string){
    return this.http.get(`${this.allDoctor}/${id}`)
  }

  pasination(pageNumber : number = 1){
    return this.http.get(`${this.allDoctor}=${pageNumber}`)
  }

  profial(){
    return this.http.get(`${this.allDoctor}/6428eb43dc1175abc65ca0b3`)
  }
  private apiUrl = 'https://retoolapi.dev/SJTBhb/data';


  addRating(rating: any): Observable<any> {
    return this.http.post(this.apiUrl, rating);
  }

  getRatings(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  editRating(id: number, rating: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, rating);
  }

  deleteRating(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  deleteData(id: number) {
    return this.http.delete(`${this.reviewOfDoctor}/${id}`);
  }


}
