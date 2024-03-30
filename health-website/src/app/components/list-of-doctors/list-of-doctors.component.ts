import { Component } from '@angular/core';
import { ListDoctorService } from '../../service/list-doctor.service';
import {ListDoctor} from '../../interface/list-doctor';
import { SearchDoctorPipe } from '../../pipe/search-doctor.pipe';
import { SearchHomePipe } from '../../pipe/search-home.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DoctorsApiService } from '../../service/doctors-api.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-list-of-doctors',
  standalone: true,
  imports: [ SearchDoctorPipe , NgxPaginationModule , SearchHomePipe , FormsModule , RouterLink],
  templateUrl: './list-of-doctors.component.html',
  styleUrl: './list-of-doctors.component.css'
})
export class ListOfDoctorsComponent {
  inputSearch : string= ''

  products : []=[] ;
  doctors: any;
  pageSize:number = 0; //limit
  curentPage:number = 1;
  total :number =0
  constructor(private _doctorApi:DoctorsApiService) {  }

  ngOnInit():void{

       this._doctorApi.getAllDoctors().subscribe(data=> {this.doctors= data
        console.log(this.doctors);
       })




  }

  // pageChanged(event:any):void{
  //   this._doctorApi.pasination(event).subscribe({
  //     next:(res:any)=>{ this.products = res;
  //       console.log(this.products);

  //     },


  //  });





  // }




}
