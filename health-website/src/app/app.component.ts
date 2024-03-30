import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { ListOfDoctorsComponent } from './components/list-of-doctors/list-of-doctors.component';
import { CommonModule } from '@angular/common';
import { ProfialComponent } from './components/profial/profial.component';
import { AdminComponent } from "./dashboard/admin/admin.component";
import { LocalStorageService } from './service/local-storage.service';
import { UsersService } from './service/users.service';
import { HomeComponent } from './components/home/home.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet , CommonModule, ProfialComponent, NavbarComponent, HomeComponent, FooterComponent, RegisterComponent, ListOfDoctorsComponent, AdminComponent]
})
export class AppComponent {
  title = 'Health_Website';
  isAuth : boolean = false  ;
  user : {} = [] ;

  constructor( private LocalStorageApi : LocalStorageService , private userApi : UsersService ){}


  ngOnInit(): void {
    const Auth = this.LocalStorageApi.getData('user');
    console.log(Auth);


    if (Auth && Auth.id) { // Check if Auth is not null or undefined
      this.isAuth = !!Auth;
      const id = Auth.id;

      if (this.isAuth) {
        this.userApi.oneUser(id).subscribe((data) => {
          this.user = data;
          console.log(this.user);
        });
      }
    }
  }
}
