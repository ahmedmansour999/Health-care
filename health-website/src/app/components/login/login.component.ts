import { LocalStorageService } from './../../service/local-storage.service';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { LayoutComponent } from '../../layout/layout.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule , ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isAuth : boolean = false ;
  data:any;
  error:string = '';
  isLoading:boolean = false;
  constructor(private Auth:AuthService , private Router:Router , private LocalStorageApi : LocalStorageService , private LayoutComponent:LayoutComponent ) {}

  loginForm: FormGroup = new FormGroup({
      email:new FormControl('' ,[ Validators.required , Validators.email]),
      password: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),
  });

  handleSubmitForm(){
    const userData = this.loginForm.value;
    this.isLoading=true;
    if(this.loginForm.valid === true){
      this.Auth.login(userData).subscribe(
       (res:any)=>{ this.data = res
        if(this.data.message == "Successfully"){
          console.log(res);
          // this.isLoading=false;
          this.LayoutComponent.isAuth=true;
          this.LocalStorageApi.setData('user' , res)
          if(this.data.is_admin == 'patient'){
            this.Router.navigate(['home/pf']);
          }else if(this.data.is_admin == 'doctor'){
            this.Router.navigate(['admin/docAppointment']);
          }else{
            this.Router.navigate(['admin/dashadmin']);
          }

        }
       },
       (err)=>{this.error = err.error.message;
      //  this.isLoading=false;
    },
      );
    }
  }
}
