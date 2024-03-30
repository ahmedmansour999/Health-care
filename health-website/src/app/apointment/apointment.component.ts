import { AppointmentApiService } from './../service/appointment-api.service';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { DoctorsApiService } from '../service/doctors-api.service';

@Component({
  selector: 'app-apointment',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './apointment.component.html',
  styleUrl: './apointment.component.css',
})
export class ApointmentComponent {
  appForm: FormGroup;
  doctors: any[] = [];

  constructor(
    private fb: FormBuilder,

    private appointmentApiService: AppointmentApiService,
    private doctorApi: DoctorsApiService
  ) {
    this.appForm = this.fb.group({
      note: ['', [Validators.required, Validators.minLength(3)]],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(200),
        ],
      ],
      price: ['', [Validators.required]],
      patient_id: ['', [Validators.required]],
      doctor_id: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.doctorApi.getAllDoctors().subscribe(
      (data) => {
        this.doctors = data.doctors.docotor;
        console.log(this.doctors);
      },
      (error) => {
        console.error('Error fetching doctors:', error);
      }
    );
  }

  handleSubmitForm() {


    if (this.appForm.valid) {
      const formData = {

        note: this.appForm.get('note')?.value,
        description: this.appForm.get('description')?.value,
        price: this.appForm.get('price')?.value,
        doctor_id: Number(this.appForm.get('doctor_id')?.value),
        patient_id: this.appForm.get('patient_id')?.value,
        status : 'pending' ,
      };


      this.appointmentApiService.addAppointment(formData).subscribe(
        (response) => {
          console.log('Appointment added successfully:', response);
          this.appForm.reset();
        },
        (error) => {
          console.error('Error adding appointment:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
