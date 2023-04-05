import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthoneGuard implements CanActivate {


  constructor(private route: Router) {

  }

  canActivate() {
    if (localStorage.getItem("usertype") == "admin"){
      return true;
    }
    else {
      return this.route.navigate(['/']);
    }

  }


}
