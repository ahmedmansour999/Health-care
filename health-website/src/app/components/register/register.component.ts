import { Component, Renderer2 } from '@angular/core';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  data: any;
  error: string = '';
  isLoading: boolean = false;
  departments: any =[];




  constructor(
    private Auth: AuthService,
    private Router: Router,
    private renderer: Renderer2
  ) {
    this.Auth.departemnt().subscribe((res) => {
      this.departments = res;
    });
  }

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/),
    ]),
    gender: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(1)]),
    number: new FormControl('', [Validators.required]),
    is_admin: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    department_id: new FormControl(''),
  });




  handleForm() {
    console.log(this.registerForm.value);

    const userData = this.registerForm.value;
    this.isLoading = true;
    if (this.registerForm.valid) {
      this.Auth.register(userData).subscribe(
        (res) => {
          this.data = res;
          console.log(this.data);

          if (this.data.status === true) { // Check for the status instead of message
            this.Router.navigate(['home/login']);
          } else {
            // Handle other cases if needed
          }
        },
        (err) => {
          this.error = err.error.message;
        }
      ).add(() => {
        this.isLoading = false; // Set isLoading to false regardless of success or failure
      });
    } else {
      let errorMessage = 'Please correct the following errors: \n';

      Object.keys(this.registerForm.controls).forEach((controlName) => {
        const control = this.registerForm.get(controlName);
        if (control && control.invalid && control.errors !== null) {
          Object.keys(control.errors).forEach((error) => {
            switch (error) {
              case 'required':
                errorMessage +=` ${controlName} is required.\n`;
                break;
              case 'is_admin':
                errorMessage += `${controlName} is required.\n`;
                break;
              case 'minlength':
                errorMessage += `${controlName} must be at least 6 characters long.\n`;
                break;
              case 'email':
                errorMessage +=` ${controlName} must be a valid email address.\n`;
                break;
              case 'pattern':
                errorMessage +=` ${controlName} contains invalid characters.\n`;
                break;
              case 'min':
                errorMessage += `${controlName} must be greater than 0.\n`;
                break;
              // Add cases for other validation errors as needed
            }
          });
        }
      });

      // Show the error message to the user
      if (this.registerForm.get('is_admin')?.value === 'doctor') {
        errorMessage += `department required.\n`;
      }
      // Set the error message
      this.error = errorMessage;
      this.isLoading = false;
    }
  }

  showDepartement() {
    this.renderer.removeClass(
      document.getElementById('departement'),
      'd-none'
    );
  }
  removeDepartement() {
    this.renderer.addClass(
      document.getElementById('departement'),
      'd-none'
    );
  }

  get departmentRequired() {
    return this.registerForm.get('is_admin')?.value === 'doctor' ? Validators.required : null;
    if (this.registerForm.invalid ) {
      alert('check the department')
    }
  }
}
