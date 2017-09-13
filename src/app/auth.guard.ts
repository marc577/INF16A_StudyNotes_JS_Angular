import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'
import { UserServiceService } from './user-service.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private user: UserServiceService, private router:Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.user.getUserLoggegIn()) {
      return this.user.getUserLoggegIn();
    }
    else {
      this.router.navigate(['']);
      return this.user.getUserLoggegIn();
    }
  }
}

//this.user.getUserLoggegIn()