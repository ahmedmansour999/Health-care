import { UsersService } from './../../service/users.service';
import { LocalStorageService } from './../../service/local-storage.service';
import { Component, Input } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Input() isAuth : boolean = false ;
  user : any ;


  constructor( private LocalStorageApi : LocalStorageService , private userApi :UsersService , private authService:AuthService , private router:Router){
    const Auth = this.LocalStorageApi.getData('user');
    this.isAuth = !!Auth;

    if (this.isAuth && Auth.id) {
      const id = Auth.id;

      this.userApi.oneUser(id).subscribe((data) => {
        this.user = data;
        console.log("dasdasdasdasdasd" ,this.user);
      });
    }
  }
  ngOnInit():void{
    setTimeout(() => {
      const Auth = this.LocalStorageApi.getData('user');
      console.log(Auth);
      this.isAuth = !!Auth;
    }, 500);
  }


  logout(): void {
    this.authService.logout().subscribe(
      response => {
        localStorage.removeItem('user');
        this.router.navigate(['/home/login'])
        this.isAuth=false
      },
      error => {
        localStorage.removeItem('user');
        this.router.navigate(['/home/login'])
        this.isAuth=false

      }
    );
  }
  }


