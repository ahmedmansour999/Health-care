import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ByLoginService {
  data =   this.LocalStorageService.getData('user');

  constructor(private _router:Router , private LocalStorageService:LocalStorageService) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (this.data.is_admin != "patient" )  {
        
        this._router.navigate(['/home/login']);

        return false;
      }
      return true;
  }
}
