import { subscribe } from 'diagnostics_channel';
import { Component } from '@angular/core';
import { PatientApiService } from '../service/patient-api.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
  patient:any;

  constructor(private _patientapi:PatientApiService){

  }
  ngOnInit():void{
    
   this._patientapi.getOnepatient(1).subscribe(data=>{this.patient=data,console.log(this.patient.patient);
   });






  }

}
