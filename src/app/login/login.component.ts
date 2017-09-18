import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  private username: string;
  private password: string;
  private target: any;
  private elementRef: ElementRef;
  private height: number;
  private width: number;
  private teacher = [];
  private admin = {};

  constructor(private router: Router, private user: UserServiceService, private myElement: ElementRef, private _cookieService:CookieService) {
    this.elementRef = myElement;
  }

  ngOnInit() {
    this.getTeacher();
    this.target = this.myElement.nativeElement.querySelector("#image");
    var movementStrength = 40;
    this.height = movementStrength / (window.screen.height);
    this.width = movementStrength / (window.screen.width);

  }

  private getTeacher() {
      this.teacher = JSON.parse(localStorage.getItem("teachers"));
      if(this.teacher == null){
        this.teacher = [];
        this.admin = {
          'firstName':"admin",
          'lastName': "admin",
          'mail': "admin@gmail.com",
          'password': "admin"
        }
        this.teacher.push(this.admin);
        localStorage.setItem("teachers", JSON.stringify(this.teacher));
        this.teacher = JSON.parse(localStorage.getItem("teachers"));
      }
  }

  private loginUser() {
    for (let i = 0; i < this.teacher.length; i++) {
      if (this.username == this.teacher[i].firstName && this.password == this.teacher[i].password  ) {
        localStorage.setItem("currentUser", this.username+ " "+ this.teacher[i].lastName);
        this.setCookie("isLoggedIn", "true", 1);
        this.user.setUserLoggedIn();
        this.router.navigate(['content/home']);
      }
    }

  }

  private setCookie(name: string, value: string, expireDays: number, path: string = "") {
    let d:Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires:string = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + (path.length > 0 ? "; path=" + path : "");
}

  private getCookie(key: string){
    return this._cookieService.get(key);
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    var pageX = event.pageX - ((window.screen.width) / 2);
    var pageY = event.pageY - ((window.screen.height) / 2);
    var newvalueX = this.width * pageX * -1 - 25;
    var newvalueY = this.height * pageY * -1 - 50;
    this.target.style.left = 500 + newvalueX + "px";
    this.target.style.top = newvalueY + "px";
  }
}
