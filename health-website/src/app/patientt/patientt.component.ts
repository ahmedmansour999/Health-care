import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PatientApiService } from '../service/patient-api.service';
 

@Component({
  selector: 'app-patientt',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './patientt.component.html',
  styleUrl: './patientt.component.css'
})
export class PatienttComponent {
  patient:any;

  constructor(private _patientapi:PatientApiService){

  }
  ngOnInit():void{
    
   this._patientapi.getOnepatient(2).subscribe(data=>{this.patient=data,console.log(this.patient);
   });






  }

}
