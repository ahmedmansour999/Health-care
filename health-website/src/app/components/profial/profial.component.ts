import { Component } from '@angular/core';
import { ListDoctorService } from '../../service/list-doctor.service';
import { ListDoctor } from '../../interface/list-doctor';
import { LocalStorageService } from '../../service/local-storage.service';
import { LayoutComponent } from '../../layout/layout.component';

@Component({
  selector: 'app-profial',
  standalone: true,
  imports: [],
  templateUrl: './profial.component.html',
  styleUrl: './profial.component.css'
})
export class ProfialComponent {

  products : any ;
  doctors: ListDoctor[]=[];
constructor(private oneDoctor:ListDoctorService,private LocalStorageApi : LocalStorageService,private LayoutComponent:LayoutComponent){}

ngOnInit():void{
  this.oneDoctor.getAllDoctor().subscribe(
    (AllDoctors)=>{ this.products = AllDoctors;
      this.doctors = this.products.data;
    })
    setTimeout(() => {
      const Auth = this.LocalStorageApi.getData('user');
      console.log(Auth);
      this.LayoutComponent.isAuth = !!Auth;
    }, 1000);
   }

  }
