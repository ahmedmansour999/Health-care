import { FreetimeService } from './../service/freetime.service';
import { CommentsService } from './../service/comments.service';
import { DoctorsApiService } from './../service/doctors-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ListDoctorService } from '../service/list-doctor.service';
import { ApiService } from '../service/api.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, formatDate } from '@angular/common';
import { ApointmentComponent } from '../apointment/apointment.component';
import { AppointmentApiService } from '../service/appointment-api.service';
import { LocalStorageService } from '../service/local-storage.service';
import { routes } from '../app.routes';
import { Router } from '@angular/router';
import { UniqueArrayPipe } from '../pipe/unique-array.pipe';
// Define the Comment interface
interface Comment {
  text: string;
  user: string;
  date: string;
  rating?: number | null;
}

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css'] ,
  standalone:true ,
  imports : [
    CommonModule ,
    FormsModule ,
    ReactiveFormsModule ,
    RouterLink,


  ]
})
export class DoctorDetailsComponent implements OnInit {



  textComment :string = '' ;
  rate : any ;
  doctor: any;
  editIndex: number = -1;
  editedText: string = '';
  hoveredRate: number = 0;
  comments : any[] | undefined ;
  userId :any = 1 ;
  doctorId :number  = 1 ;
  appForm: FormGroup;
  doctors:  any = {doctors:[]};
  isAuth : boolean = false  ;
  id : number = 0;
  freetimeId : any
  freetime : any ;
  ;

  constructor(
    private activatedRoute: ActivatedRoute,
    // private listDoctorService: ListDoctorService,
    // private apiService: ApiService,
    private  doctorsApiService:DoctorsApiService ,
    private commentApi : CommentsService ,
    private fb: FormBuilder,
    private _route:Router ,
    private appointmentApiService: AppointmentApiService,
    private doctorApi: DoctorsApiService ,
    private LocalStorageApi : LocalStorageService ,
    private FreetimeService : FreetimeService ,


  ) {
    this.appForm = this.fb.group({
      note: ['', [Validators.required, Validators.minLength(3)]],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(200),
        ],
      ],
      price: ['200', [Validators.required]],
      patient_id: [this.userId, []],
      doctor_id: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });




  }


  getUniqueDoctorFreetimes() {
    const uniqueFreetimes = [];
    const seen = new Set();

    for (const time of this.doctor.doctor.freetime) {
      const key = time.doctor_freetimes;

      if (!seen.has(key)) {
        seen.add(key);
        uniqueFreetimes.push(time);
      }
    }

    return uniqueFreetimes;
  }







  appiontmentDate:any ='';

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params['id']

    this.doctorId = id;
    console.log('yyyyyy' , this.id);


    this.doctorsApiService.getOneDoctors(id).subscribe((data) => {
      this.doctor = data;
      console.log("test" , this.doctor);
    });

    this.FreetimeService.getAllFreetimes(id).subscribe((data) => {

      this.freetime = data ;
      console.log("kasgdkjsakdjhsakjdhkahsdkahkjh" ,this.freetime);


    })




      const Auth = this.LocalStorageApi.getData('user');

      this.isAuth = !!Auth;

      console.log("lastsadjasjk" , this.isAuth);

      if (Auth) {
        this.userId = Auth.id;
      }

      this.commentApi.getAllcomments(id).subscribe((data) => {
        this.comments = data.data;
        console.log("comment", data.data);
      });

  }


  getAllComments(){
    this.commentApi.getAllcomments(this.id).subscribe((data) => {
      this.comments = data.data;
      console.log("comment", data.data);
    });
  }



  submitForm() {
    if (this.isAuth) {
      const    authToken : any = localStorage.getItem('user');
      const   Api : any = JSON.parse(authToken);
      const commentData = {
        comment: this.textComment,
        rating: this.rate,
        user_id:  Api.id,
        doctor_id: this.doctorId ,
      };

      this.commentApi.addComment(commentData).subscribe(
        (response) => {
          console.log('Comment added successfully:', response);
          this.textComment = '';
          this.rate = 0;
          this.getAllComments() ;
        },
        (error) => {
          console.error('Error adding comment:', error);
        }
      );
    } else {
      this._route.navigate(['/home/login']);
    }
  }




  handleSubmitForm() {
    const    authToken : any = localStorage.getItem('user');
    const   Api : any = JSON.parse(authToken);


    if (this.appForm.valid) {
      const formData ={
        note:this.appForm.get('note')?.value,
        description: this.appForm.get('description')?.value,
        price: this.appForm.get('price')?.value,
        doctor_id:this.appForm.get('doctor_id')?.value ,
        patient_id: Api.id,
        date: this.appForm.get('date')?.value,
        status : 'pending' ,
      };
      console.log(formData);


      this.appointmentApiService.addAppointment(formData).subscribe(
        (response) => {
          console.log('Appointment added successfully:', response);
          this.appForm.reset();
          // this._route.navigate(['/home/doctors']);

        },
        (error) => {
          console.error('Error adding appointment:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }


  getdate(date: string){
    this.appiontmentDate = date;
    return this.appiontmentDate;
  }




}
