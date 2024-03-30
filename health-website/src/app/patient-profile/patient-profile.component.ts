import { LocalStorageService } from './../service/local-storage.service';
import { PatientApiService } from './../service/patient-api.service';
import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-patient-profile',
  standalone: true,
  imports: [],
  templateUrl: './patient-profile.component.html',
  styleUrl: './patient-profile.component.css'
})
export class PatientProfileComponent {
  patient: any;
  constructor(private patientApi:PatientApiService  , private LocalStorageApi : LocalStorageService){

  }
  ngOnInit(){
    // location.reload();

      const Auth = this.LocalStorageApi.getData('user');
      if (Auth) {
        const user = JSON.parse(Auth);
        this.patient = user.id;

         this.patientApi.getOnepatient(this.patient).subscribe((data) => {
          this.patient = data;
          console.log(this.patient);
        }) ;
      }
  }
}
