import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class UserServiceService {

private isUserLoggedIn;
private username;

  constructor(private _cookieService:CookieService) { 
    if(this.getCookie("isLoggedIn") == 'true'){
      this.isUserLoggedIn = true;      
    }
    else{
      this.isUserLoggedIn = false;
    }
  }

  private getCookie(key: string){
    return this._cookieService.get(key);
  }

  setUserLoggedIn(){
    if(this.getCookie("isLoggedIn") == 'true'){
      this.isUserLoggedIn = true;      
    }
    else{
      this.isUserLoggedIn = false;
    }
  }

  getUserLoggegIn(){
    return this.isUserLoggedIn;
  }
}
