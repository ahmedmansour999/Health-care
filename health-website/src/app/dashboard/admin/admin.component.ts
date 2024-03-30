import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-admin',
  standalone: true ,
  imports: [RouterOutlet , RouterLink  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  name:string ='';
  checkUser : any ;
  constructor( private authService:AuthService , private router:Router){}
  ngOnInit(){
    const isName :any = localStorage.getItem('user')
    const user = JSON.parse(isName);
    this.checkUser = user ;
    this.name = user.name;
  }
  logout(): void {
    this.authService.logout().subscribe(
      response => {
        localStorage.removeItem('user');
        this.router.navigate(['/home/login'])
        // this.isAuth=false
      },
      error => {
        localStorage.removeItem('user');
        this.router.navigate(['/home/login'])
        // this.isAuth=false

      }
    );
  }
}
