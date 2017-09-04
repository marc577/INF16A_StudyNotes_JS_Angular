import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceService {

private isUserLoggedIn;
private username;

  constructor() { 
    this.isUserLoggedIn = false;


  }
  setUserLoggedIn(){
    this.isUserLoggedIn = true;
  }

  getUserLoggegIn(){
    return this.isUserLoggedIn;
  }

}
