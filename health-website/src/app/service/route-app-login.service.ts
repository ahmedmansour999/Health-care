import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RouteAppLoginService {
 data =   this.LocalStorageService.getData('user');
  constructor(private _router:Router , private LocalStorageService:LocalStorageService) { }
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (this.data.is_admin == "patient" )  {
        this._router.navigate(['/home']);
        return true;
      }else if(this.data.is_admin == "doctor"){
        this._router.navigate(['/admin']);
        return true;
      }
      return false;
  }
}
