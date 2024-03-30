
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { AppointmentApiService } from '../service/appointment-api.service';
import { DoctorsApiService } from '../service/doctors-api.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
  CommonModule ,
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit {
  formData: any = {}; // Declare formData property and initialize it with an empty object
  doctors: any[] = [];
  appForm: FormGroup;
  note : string = '' ;


  constructor(
    private formBuilder: FormBuilder,
    private appointmentApiService: AppointmentApiService,
    private doctoprApi: DoctorsApiService
  ) {
    this.appForm = this.formBuilder.group({
      note: [''],
      description: [''],
      price: [''],
      doctorId: [''],
      patientId: ['']
    });
  }


  ngOnInit(): void {


    // Fetch doctors from the API when the component initializes
    this.doctoprApi.getAllDoctors().subscribe(
      (data) => {
        this.doctors = data.doctors;
        console.log(data);

      },
      (error) => {
        console.error('Error fetching doctors:', error);
      }
    );
  }

  handleSubmitForm(): void {
    if (this.appForm) {
      const formData = this.appForm.value;
      console.log(formData);

      this.appointmentApiService.addAppointment(formData).subscribe(
        (response) => {
          console.log('Appointment added successfully:', response);
          this.appForm.reset();
        },
        (error) => {
          console.error('Error adding appointment:', error);
        }
      );
    }
  }
}
