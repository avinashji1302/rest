import { Injectable } from '@angular/core';
import { MserviceService } from './main/mservice.service';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: "root",
})

export class AuthGuard implements CanActivate {
  constructor(private authService: MserviceService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Promise<boolean> {
    var isAuthenticated = sessionStorage.getItem('bool');
    if (isAuthenticated!='true') {
      return this.router.navigate(['admin/']);
    } else {
      return true;
    }
  }
}
