import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardLoginService implements CanActivate {

  constructor(private _router:Router , private LocalStorageService:LocalStorageService) { }
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!this.LocalStorageService.getData('user'))  {
        this._router.navigate(['/home/login']);
        return false;
      }
      return true;
  }
}
